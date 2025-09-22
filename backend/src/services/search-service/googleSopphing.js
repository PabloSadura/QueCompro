import fetch from "node-fetch";

const SERPAPI_KEY = process.env.SERPAPI_KEY; // guardá tu API key en .env

/**
 * Consulta a Google Shopping vía SerpAPI
 */
async function fetchGoogleShopping(query) {
  try {
    const url = `https://serpapi.com/search.json?q=${encodeURIComponent(
      query
    )}&engine=google_shopping&api_key=${SERPAPI_KEY}&num=1`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.shopping_results && data.shopping_results.length > 0) {
      const item = data.shopping_results[0]; // solo el primer resultado
      return {
        price: item.price || null,
        image: item.thumbnail || null,
        link: item.link || null,
      };
    }

    return { price: null, image: null, link: null };
  } catch (err) {
    console.error("❌ Error en fetchGoogleShopping:", err.message);
    return { price: null, image: null, link: null };
  }
}

/**
 * Enriquecer productos con datos de Google Shopping
 */
export async function enrichProducts(products) {
  // aseguramos que sea un array
  const safeProducts = Array.isArray(products) ? products : [products];

  const enriched = [];

  for (const p of safeProducts) {
    // datos básicos de la IA
    const enrichedData = {
      ...p,
      price: null,
      image: null,
      link: null,
    };

    // enriquecemos con Google Shopping
    const gData = await fetchGoogleShopping(
      p.nombre || p.modelo || p.marca || ""
    );

    enrichedData.price = gData.price;
    enrichedData.image = gData.image;
    enrichedData.link = gData.link;

    enriched.push(enrichedData);
  }

  return enriched;
}
