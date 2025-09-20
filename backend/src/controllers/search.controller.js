const { analyzeWithGemini } = require("../services/search-service/geminiService");
const { saveSearchToFirebase } = require("../services/search-service/firebaseService");
const {searchGoogleShopping} = require('../services/search-service/googleSopphing')
const { enrichProductInfo } = require("../services/search-service/googleService");
const{analyzeWithOpenAI} = require('../services/search-service/openaiSerice')




async function handleSearchStream(req, res) {
  const { query, minPrice,  maxPrice, location } = req.query;
  const userId = req.user?.uid;

  if (!query || !userId) {
    return res.status(400).json({ error: "Missing query or userId" });
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.flushHeaders();

  function sendEvent(data) {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }


  try {
      // 1. Google Shopping
    sendEvent({ status: "Buscando en Google Shopping..." });
     let products = await searchGoogleShopping(query, minPrice, maxPrice);
     const limitedProducts = products.slice(0, 3).map(p => ({
      titulo: p.title || "Producto sin título",
      precio: p.price || "Desconocido",
      rating: p.rating || "N/A",
      tienda: p.source || "No especificado",
      imagen: p.thumbnail || p.image,
      link: p.link}));
  
    sendEvent({ status: "Analizando los mejores resulados..." });
    // 2. Enriquecer con snippets de reseñas

      // 3. Analizar con OpenAI
      /*sendEvent({ status: "Analizando con Open AI..." });
      const aiResults = await analyzeWithOpenAI(limitedProducts, query);*/
    
      //3. Gemini
      sendEvent({ status: "Analizando con IA..." });
      const aiResults = await analyzeWithGemini(limitedProducts, query);
    

    // 4. Guarda en Firebase
    sendEvent({ status: "Guardando historial..." });
  
    await saveSearchToFirebase(query, userId, aiResults);
    sendEvent({ status: "Completado", result: aiResults , products: limitedProducts});
    res.end();
  } catch (err) {
    console.error(err);
    sendEvent({ status: "Error en búsqueda", error: err.message });
    res.end();
  }
}

module.exports = { handleSearchStream };
