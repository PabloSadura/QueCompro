// src/services/geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from 'openai';
import dotenv from "dotenv";
import geminiPrompt from "../../config/geminiPrompt.js";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


function sanitizeGeminiResponse(text) {
  let cleaned = text.replace(/```(?:json)?/g, "").replace(/```/g, "");
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
  }
  return cleaned.trim();
}


export async function getBestRecommendationFromGemini(userQuery, shoppingResults) {
  if (!shoppingResults || shoppingResults.length === 0) {
    return {
      productos: [],
      recomendacion_final: "No se encontraron productos para analizar.",
    };
  }
  
  const prompt = geminiPrompt(shoppingResults, userQuery);
  
  try {
    console.log("Intentando obtener recomendación con Google Gemini...");
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();
      
    // Limpiamos la respuesta para asegurar que sea un JSON válido
    return JSON.parse(sanitizeGeminiResponse(text));

  } catch (geminiError) {
    console.warn("Falló la llamada a Gemini. Intentando con OpenAI como fallback.", geminiError.message);
  }
  try {
      console.log("Intentando obtener recomendación con OpenAI...");
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo-0125", // Modelo que soporta modo JSON
          messages: [
            { role: "system", content: prompt },
            { role: "user", content: prompt }
          ],
          response_format: { type: "json_object" },
      });

      const responseContent = completion.choices[0].message.content;
      if (!responseContent) {
        throw new Error("OpenAI devolvió una respuesta vacía.");
      }
      return JSON.parse(responseContent);

    } catch (openAIError) {
      console.error("Falló también la llamada a OpenAI.", openAIError.message);
      // Si ambos fallan, lanzamos un error final
      throw new Error("Error: No se pudo obtener una respuesta de los servicios de IA.");
    }
}
