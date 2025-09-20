const OpenAI = require("openai");
const jsonc = require("jsonc-parser"); // npm install jsonc-parser

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Analiza productos con OpenAI y devuelve JSON seguro
 * @param {Array} products - lista de productos (title, price, url, snippets, etc.)
 * @param {string} query - query del usuario
 * @returns {Array} - productos enriquecidos con pros, contras, características, calificación, recomendación
 */
async function analyzeWithOpenAI(products, query) {
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

Responde SOLO en JSON válido.
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const raw = response.choices[0].message.content;
    const sanitized = raw.replace(/\n/g, " ").replace(/\r/g, "");

    const errors = [];
    const parsed = jsonc.parse(sanitized, errors, { allowTrailingComma: true });

    if (errors.length) {
      console.warn("⚠️ Errores de parseo en OpenAI:", errors);
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
    console.error("❌ Error en analyzeWithOpenAI:", err);
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

module.exports = { analyzeWithOpenAI };
