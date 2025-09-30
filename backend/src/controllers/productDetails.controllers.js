import admin from "../config/firebase.js";

/**
 * Obtiene un documento de búsqueda de producto por su ID desde Firestore.
 * @param {object} req - El objeto de solicitud de Express.
 * @param {object} res - El objeto de respuesta de Express.
 */
async function getProductById(req, res) {
  try {
    // 1. Extraer el ID del documento de los parámetros de la URL.
    const { idCollection, idProduct } = req.params;

    // Validación básica para asegurar que el ID no esté vacío.
    if (!idCollection || !idProduct) {
      return res.status(400).json({ error: "Falta el ID del producto" });
    }

    // 2. Apuntar al documento específico en la colección 'searches'.
    const docRef = admin.firestore().collection("searches").doc(idCollection)
    const docSnap = await docRef.get();
    
    if (!docSnap.exists) {
      return res.status(404).json({ error: "Búsqueda no encontrada" });
    }

    const searchData = docSnap.data();
      
    const productoEncontrado = searchData.result?.productos?.find(
      p => p.product_id === idProduct
    );

     if (!productoEncontrado) {
      return res.status(404).json({ error: "Producto específico no encontrado en esta búsqueda" });
    }
    
    // Aseguramos una estructura consistente, incluso si faltan campos.

    res.status(200).json(productoEncontrado);

  } catch (err) {
    console.error("Error obteniendo el producto por ID:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

export { getProductById };