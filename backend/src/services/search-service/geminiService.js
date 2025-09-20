const { GoogleGenerativeAI } = require("@google/generative-ai");
const jsonc = require("jsonc-parser"); // npm install jsonc-parser

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Analiza productos con Gemini y devuelve JSON seguro
 * @param {Array} products - lista de productos (title, price, url, snippets, etc.)
 * @param {string} query - query del usuario
 * @returns {Array} - productos enriquecidos con pros, contras, características, calificación, recomendación
 */
async function analyzeWithGemini(products, query) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `
Eres un experto en compras online. Analiza los siguientes productos y devuelve un JSON válido:
- marca
- modelo
- pros[]
- contras[]
- caracteristicas[]
- precio
- calificacion (1-5)
- recomendacion
- imagen (url)
- url del producto

Productos:
${JSON.stringify(products, null, 2)}

Query del usuario: "${query}"

**Responde SOLO en JSON válido.**
Escapa correctamente todas las comillas y no incluyas texto fuera del JSON.
`;

  try {
    const result = await model.generateContent(prompt);
    const raw = result.response.text();

    // 🔹 Sanitización básica
    const sanitized = raw.replace(/\n/g, " ").replace(/\r/g, "");

    // 🔹 Parsear con jsonc-parser para tolerancia a errores
    const errors = [];
    const parsed = jsonc.parse(sanitized, errors, { allowTrailingComma: true });

    if (errors.length) {
      console.warn("⚠️ Se encontraron errores de parseo en Gemini:", errors);
      // fallback: devolver algo mínimo
      return products.map(p => ({
        ...p,
        pros: [],
        contras: [],
        caracteristicas: [],
        calificacion: null,
        recomendacion: "",
      }));
    }

    return parsed;
  } catch (err) {
    console.error("❌ Error en analyzeWithGemini:", err);
    // fallback seguro
    return products.map(p => ({
      ...p,
      pros: [],
      contras: [],
      caracteristicas: [],
      calificacion: null,
      recomendacion: "",
    }));
  }
}

module.exports = { analyzeWithGemini };
