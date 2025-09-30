// src/services/geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import geminiPrompt from "../../config/geminiPrompt.js";
dotenv.config();

// Clave API desde .env
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("❌ GEMINI_API_KEY no está definida en las variables de entorno.");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || "gemini-1.5-flash" });

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
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = response.text();

    // Limpieza y parseo
    const cleanText = sanitizeGeminiResponse(rawText);
    const parsed = JSON.parse(cleanText);

    return parsed;
  } catch (error) {
    console.error("❌ Error al comunicarse con Gemini o parsear su respuesta:", error);
    return {
      productos: [],
      recomendacion_final: "Error: Gemini no devolvió un JSON válido.",
    };
  }
}
