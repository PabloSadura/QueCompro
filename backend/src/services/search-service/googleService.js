const serpapi = require("serpapi");

/**
 * Busca reseñas y descripciones técnicas en Google (via SerpAPI)
 * @param {string} productTitle 
 */
async function enrichProductInfo(productTitle) {
  const web = await serpapi.getJson("google", {
    engine: "google_shopping",
    q: `${productTitle} review`,
    api_key: process.env.SERPAPI_KEY,
  });

  return web.organic_results?.slice(0, 3).map(r => r.snippet) || [];
}

module.exports = { enrichProductInfo };
