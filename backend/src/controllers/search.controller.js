const { analyzeWithGemini } = require("../services/search-service/geminiService");
const { saveSearchToFirebase } = require("../services/search-service/firebaseService");
const { enrichProducts } = require("../services/search-service/googleSopphing");
const{analyzeWithOpenAI} = require('../services/search-service/openaiService')




async function handleSearchStream(req, res) {
  const { query, minPrice,  maxPrice, location,engine } = req.query;
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
      // 1. Gemini analiza y devuelve 5 productos con pros/contras + recomendación
    sendEvent({ status: "Analizando..." });
    const analysis = await analyzeWithGemini(query);

    /*// 3. Analizar con OpenAI
    sendEvent({ status: "Analizando con Open AI..." });
    const analysis = await analyzeWithOpenAI(query);<*/
    
    //Validamos productos

    const products = Array.isArray(analysis.products)
      ? analysis.products
      : [analysis.products];

    sendEvent({ status: "Analizando los mejores resulados..." });
       // 2. Enriquecemos con Google Shopping
    sendEvent({ status: "Recopilando Informacion..."});
       const enrichedProducts = await enrichProducts(products);
       
       
       
       
       // 4. Guarda en Firebase
       sendEvent({ status: "Guardando historial..." });
       await saveSearchToFirebase(query, userId, enrichedProducts);
       
       sendEvent({status:" Completado ", result: enrichedProducts, recommendation: analysis.recommendation})
       
       res.end();
  } catch (err) {
    console.error(err);
    sendEvent({ status: "Error en búsqueda", error: err.message });
    res.end();
  }
}

module.exports = { handleSearchStream };
