import admin from "../../config/firebase.js";

async function saveSearchToFirebase(query, userId, result) {
  const db = admin.firestore();
  
  const docRef = db.collection(process.env.FIRESTORE_COLLECTION).doc();

  await docRef.set({
    query,
    userId,
    result, // objeto con recomendaciones IA
    createdAt: new Date()
  });
   console.log("✅ Historial guardado con ID: ", docRef.id);
  return { id: docRef.id, query, result };
  }
 export default saveSearchToFirebase
