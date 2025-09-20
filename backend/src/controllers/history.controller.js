const admin = require("../config/firebase"); // tu config de firebase

async function getUserHistory(req, res) {
  try {
    const userId = req.user?.uid;
    if (!userId) return res.status(401).json({ error: "No autorizado" });

    const snapshot = await admin.firestore().collection("searches")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(50)
      .get();

    const history = snapshot.docs.map(doc => doc.data());    
    res.json(history);

  } catch (err) {
    console.error("Error obteniendo historial:", err);
    res.status(500).json({ error: "Error interno" });
  }
}

module.exports = { getUserHistory };
