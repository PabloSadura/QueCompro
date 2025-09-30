 
 
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

    const prompt = `"Eres un analista de productos experto y objetivo. Tu misión es analizar una lista de productos de Google Shopping y recomendar las 3 mejores opciones, proporcionando un análisis 
                    detallado como si estuvieras ayudando a un consumidor a tomar una decisión informada
                    **Input del Usuario:**
                    El usuario buscó: "${userQuery}"

                    Estos son los resultados de Google Shopping para analizar:
                    ${JSON.stringify(formattedResults, null, 2)}

                    Tu Tarea:
                            1.  **Análisis:** Evalúa la lista completa de productos basándote en un balance entre precio, calificaciones de usuario, cantidad de reseñas y reputación del vendedor.
                            2.  **Selección:** Elige **exactamente 3 productos que sean modelos o artículos distintos** y que representen las mejores opciones de compra.
                            3.  **Devuelve SOLO un JSON** con el siguiente formato exacto.

                                
                            **Estructura de la Respuesta JSON:**
                            {
                                "productos_analisis": [
                                        {
                                        "product_id": "string (debe ser el 'product_id' EXACTO del producto de Google Shopping, actúa como ID único)",
                                        "pros": string[],
                                        "contras": string[]
                                        }
                                    ],
                                "recomendacion_final": "string (Resumen y conclusión del análisis)"
                            }
                ⚠️ IMPORTANTE:
                - "productos_analisis" debe contener exactamente 3 elementos.
                - Los únicos campos que debes devolver son "product_id", "pros", "contras" y "recomendacion_final". NO incluyas título, precio o enlace.
                - Devuelve **únicamente JSON**, sin explicaciones ni bloques de código.
                `;  
     return prompt;
    
 }
 