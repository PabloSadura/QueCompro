 
 
 export default function geminiPrompt(shoppingResults, userQuery) {

     const formattedResults = shoppingResults.map((item) => ({
        product_id: item.product_id,
        title: item.title,
        price: item.price,
        link: item.link,
        rating: item.rating || null,
        reviews: item.reviews || null,
        extensions: item.extensions || null, // Incluye datos adicionales
        source: item.source || null,
    }));

    const prompt = `
Eres un analista técnico experto en productos de consumo. 
Tu misión es revisar los resultados de Google Shopping y recomendar las 3 mejores opciones basándote principalmente en las especificaciones técnicas y en la experiencia de los usuarios cuando existan calificaciones.

📌 Contexto de la búsqueda:
El usuario buscó: "${userQuery}"

📌 Resultados de Google Shopping:
${JSON.stringify(formattedResults, null, 2)}

🎯 Tu Tarea:
1. **Analiza todos los productos** priorizando:
   - Especificaciones técnicas y características del producto.
   - Comparación objetiva de funcionalidades relevantes.
   - Solo si están disponibles: calificaciones de usuarios y cantidad de reseñas, para validar la calidad percibida.
   - Ignora reputación del vendedor, enlaces o aspectos no técnicos.
2. **Selecciona exactamente 3 productos distintos** (no repitas el mismo modelo/versión) que representen las mejores opciones técnicas de compra.
3. Para cada producto elegido, describe de forma clara y breve:
   - **Pros**: ventajas técnicas y diferenciales.
   - **Contras**: limitaciones técnicas o posibles debilidades.
4. **Devuelve exclusivamente un JSON válido**, en el siguiente formato exacto:

📌 Formato de Respuesta:
{
  "productos_analisis": [
    {
      "product_id": "string (usar exactamente el 'product_id' del producto de Google Shopping)",
      "pros": ["ventaja técnica 1", "ventaja técnica 2"],
      "contras": ["limitación técnica 1", "limitación técnica 2"]
    },
    {
      "product_id": "string",
      "pros": ["..."],
      "contras": ["..."]
    },
    {
      "product_id": "string",
      "pros": ["..."],
      "contras": ["..."]
    }
  ],
  "recomendacion_final": "string (conclusión experta centrada en el desempeño técnico y, si existe, validación por usuarios)"
}

⚠️ IMPORTANTE:
- "productos_analisis" debe contener exactamente 3 elementos.
- Devuelve únicamente los campos solicitados: "product_id", "pros", "contras", "recomendacion_final".
- No incluyas títulos, precios, enlaces ni texto adicional fuera del JSON.
- Si no hay reseñas o calificaciones, analiza y compara únicamente por especificaciones técnicas.
`;

     return prompt;
    
 }
 