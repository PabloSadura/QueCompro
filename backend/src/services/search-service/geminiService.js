import { GoogleGenerativeAI } from "@google/generative-ai";
import { Models } from "openai/resources/models.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeWithGemini(userQuery) {
  try {
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Limpieza y parse seguro
    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Error en analyzeWithGemini:", error);
    throw error;
  }
}
