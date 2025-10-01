import { getJson } from "serpapi";
import client from "../../config/redis.js";
import dotenv from 'dotenv';
dotenv.config(); // Cargar variables de entorno

const CACHE_EXPIRATION_TIME = 3600; // 1 hora en segundos
const RATING_FILTER_TBS = "mr:1,rt:4"; 

/**
 * Busca productos en Google Shopping.
 * @param {string} query - La consulta del usuario.
 * @param {string} gl - Código de país.
 * @param {string} hl - Código de idioma.
 * @param {string} currency - Moneda.
 * @param {number} [minPrice] - Precio mínimo opcional.
 * @param {number} [maxPrice] - Precio máximo opcional.
 * @returns {Promise<Array<object>>} Array de resultados de Google Shopping.
 */

export async function fetchGoogleShoppingResults(userQuery, countryCode, languageCode, currency, minPrice, maxPrice) {
    
    if (!userQuery) throw new Error("La consulta no puede estar vacía.");

    const cacheKey = `serpapi:shopping:${userQuery}:${countryCode}:${languageCode}:${currency}:${minPrice}:${maxPrice}`;
    try {
        const cachedData = await client.get(cacheKey);
        if (cachedData) {
            console.log("✅ Usando datos de caché para:", userQuery);
            return JSON.parse(cachedData);
        }
    } catch (err) {
        console.error("❌ Error al acceder a Redis, procediendo sin caché:", err);
    }

    const params = {
        engine: "google_shopping",
        q: userQuery,
        gl: countryCode || 'ar',
        hl: languageCode || 'es',
        currency: currency || 'ARS',
        num: 20, // Aumentamos el número para darle más opciones a Gemini
        tbs: RATING_FILTER_TBS,
        api_key: process.env.SERPAPI_KEY,
    };
        if (minPrice && !isNaN(minPrice)) params.min_price = minPrice;
        if (maxPrice && !isNaN(maxPrice)) params.max_price = maxPrice;

    return new Promise((resolve, reject) => {
        getJson(params, (data) => {
                if (data.error) {
                    return reject(new Error(`SerpApi Google Shopping Error: ${data.error} (Query: ${userQuery}), Params: ${JSON.stringify(params)}`));
                }
                const results = data.shopping_results || [];
                client.set(cacheKey, JSON.stringify(results), { EX: CACHE_EXPIRATION_TIME });
                resolve(results);
            });
    });
}


