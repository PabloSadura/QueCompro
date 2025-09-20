import { getJson } from "serpapi";

const SERPAPI_KEY = process.env.SERPAPI_KEY;

/**
 * Búsqueda en Google Shopping con SerpAPI
 * @param {string} query - búsqueda del usuario
 * @param {string} [location] - ubicación opcional (ej: "Buenos Aires, Argentina")
 * @returns {Promise<Array>}
 */
export async function searchGoogleShopping(query, minPrice, maxPrice) {
  try {
    const data = await getJson("google_shopping", {
    engine: "google_shopping",
    q: query,
    location: "Buenos Aires, Argentina",
    api_key: process.env.SERPAPI_KEY,
    });

    if (!data.shopping_results) return [];

   let products = (data.shopping_results || []).map(p => ({
     title: p.title,
      price: p.price,
      link: p.link,
      thumbnail: p.thumbnail,
      store: p.store_name,
  }));
  

  // Filtrar por rango de precios
    if (minPrice || maxPrice) {
        products = products.filter(p =>
            (!minPrice || p.precio >= minPrice) &&
            (!maxPrice || p.precio <= maxPrice)
        );
    }
     const top3 = products.slice(0, 3).map(p => ({
      title: p.title,
      price: p.price,
      link: p.link,
      thumbnail: p.thumbnail,
      store: p.store_name,
    }));
      return top3;
      
  } catch (err) {
    console.error("❌ Error en Google Shopping:", err);
    return [];
  }
}
