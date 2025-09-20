import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeWithGemini(products) {
  try {
    // 1. Tomamos solo los 3 primeros productos relevantes
    const topProducts = products.slice(0, 3).map(p => ({
      titulo: p.titulo || p.title || "Producto sin título",
      precio: p.precio || p.price || "Desconocido",
      rating: p.rating || "N/A",
      tienda: p.tienda || p.source || "No especificado"
    }));

    // 2. Armamos un prompt compacto
    const prompt = `
Analiza los siguientes productos y dame:
- Una recomendación final (cuál conviene y por qué).
- Lista breve de características.
- Pros y contras en bullets.

Productos:
${topProducts.map((p, i) => 
  `${i+1}. ${p.titulo} - Precio: ${p.precio} - Rating: ${p.rating} - Tienda: ${p.tienda}`
).join("\n")}
    `;

    // 3. Llamada a Gemini con prompt reducido
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("Error en analyzeWithGemini:", error);
    return "No se pudo analizar con IA en este momento.";
  }
}
