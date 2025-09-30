import saveSearchToFirebase from "../services/search-service/firebaseService.js";
import { fetchGoogleShoppingResults } from "../services/search-service/googleSopphing.js";
import { getBestRecommendationFromGemini } from "../services/search-service/geminiService.js";
import { getGeoLocation } from "./aiApi.controller.js";
import logicFusion from "./logis.controller.js";
import {fetchImmersiveProductDetails} from'../services/search-service/googleInmersive.js'

export default async function handleSearchStream(req, res) {

  // La lógica de geolocalización ahora está en el controlador
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const geoData = await getGeoLocation(ip);

    // Mapeo simple de país a idioma y moneda
    const countryCode = geoData.countryCode.toLowerCase();
    const languageCode = (countryCode === "ar" || countryCode === "es") ? "es" : "en";
    const currency = geoData.currency;

    const userQuery = req.query.query;
    const minPrice = Number(req.query.minPrice);
    const maxPrice = Number(req.query.maxPrice);
    const userId = req.user?.uid;

    if (!userQuery || !userId) {
        return res.status(400).json({ error: "Missing query or userId" });
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.flushHeaders();

    function sendEvent(data) {
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }

    try {
        // 1. Buscar en Google Shopping
        sendEvent({ status: `Buscando en Google Shopping para: ${userQuery} en ${countryCode.toUpperCase()} en ${currency}...` });
        const shoppingResults = await fetchGoogleShoppingResults(userQuery, countryCode, languageCode, currency, minPrice, maxPrice);

        if (!shoppingResults || shoppingResults.length === 0) {
            sendEvent({ error: "No se encontraron productos en Google Shopping." });
            return res.end();
        }

        // 2. Analizar con Gemini para obtener la mejor recomendación
        sendEvent({ status: `Analizando resultados con Gemini para la mejor opción...`});
        const geminiAnalysis  = await getBestRecommendationFromGemini(userQuery, shoppingResults);
        
        if (!geminiAnalysis || !geminiAnalysis.productos_analisis) {
            sendEvent({ error: "No se pudo obtener un análisis válido de Gemini." });
            return res.end();
        }

         
            const productosRecomendadosBase  = logicFusion(shoppingResults, geminiAnalysis);

            // 3. Llamada en paralelo SÓLO a microservicio de datos inmersivos
            sendEvent({ status: "Buscando datos detallados de Google Immersive Product..." });
            const immersivePromises = productosRecomendadosBase .map(product =>
            fetchImmersiveProductDetails(product.serpapi_immersive_product_api)
            );

            const immersiveResults = await Promise.all(immersivePromises);


            const productosRecomendadosFinales = productosRecomendadosBase.map((product, index) => {
            const immersiveDetails = immersiveResults[index];
            return {
                    ...product,
                    immersive_details: immersiveDetails // Añade los detalles inmersivos
                    };
            });
         // 5. Estructura final y guardado
                const finalRecommendation = {
                    recomendacion_final: geminiAnalysis.recomendacion_final,
                    productos: productosRecomendadosFinales,
                };
        
        // 3. Guardar en Firebase y enviar resultado final en paralelo para no bloquear
        await Promise.all([
            saveSearchToFirebase(userQuery, userId, finalRecommendation ),
            sendEvent({ status: "Completado", result: finalRecommendation     })
        ]);
        
    } catch (err) {
        console.error("Error en el flujo de búsqueda:", err);
        sendEvent({ status: "Error en búsqueda", error: err.message });
    } finally {
        res.end();
    }
}