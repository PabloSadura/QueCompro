const OpenAI = require("openai");
const jsonc = require("jsonc-parser"); // npm install jsonc-parser

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Analiza productos con OpenAI y devuelve JSON seguro
 * @param {Array} products - lista de productos (title, price, url, snippets, etc.)
 * @param {string} query - query del usuario
 * @returns {Array} - productos enriquecidos con pros, contras, características, calificación, recomendación
 */
async function analyzeWithOpenAI(userQuery) {

       const prompt = `
Eres un asistente experto en compras online. 
El usuario quiere: "${userQuery}".

Debes:
1. Seleccionar máximo 5 productos relevantes.
2. Para cada producto devolver:
   - id (número incremental)
   - nombre
   - descripcion breve
   - motivo_seleccion
   - pros (array de 3 a 5 puntos)
   - contras (array de 3 a 5 puntos)
3. No inventes precios ni imágenes. Eso lo agregaremos después.
4. Al final agrega una recomendación final con el producto que tú comprarías.

IMPORTANTE: Responde ÚNICAMENTE en formato JSON válido con esta estructura:

{
  "products": [
    {
      "id": 1,
      "nombre": "",
      "descripcion": "",
      "motivo_seleccion": "",
      "pros": ["", ""],
      "contras": ["", ""]
    }
  ],
  "recommendation": ""
}
    `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });


    const raw = response.choices[0].message.content;
    const cleanText = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

  


    return JSON.parse(cleanText);
  } catch (err) {
    console.error("❌ Error en analyzeWithOpenAI:", err);
    return err
  }
}

module.exports = { analyzeWithOpenAI };
