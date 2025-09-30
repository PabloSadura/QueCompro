import admin from "../config/firebase.js";
 // tu config de firebase

async function getUserHistory(req, res) {
  try {    
    const userId = req.user?.uid;
    if (!userId) return res.status(401).json({ error: "No autorizado" });
    
    const snapshot = await admin.firestore().collection("searches")
        .where("userId", "==", userId)
        .orderBy("createdAt", "desc")
        .get();
     const info = snapshot.docs.map(doc => {
        const data = doc.data(        );
        return  {
          id: doc.id,
          query: data.query || "",
          createdAt: data.createdAt || "",
          result: {
            productos: data.result.productos || [],
            recomendacion_final: data.result.recomendacion_final || "No hay recomendación disponible"
        }}
      });
    res.json(info);

  } catch (err) {
    console.error("Error obteniendo historial:", err);
    res.status(500).json({ error: "Error interno" });
  }
}

export default getUserHistory
