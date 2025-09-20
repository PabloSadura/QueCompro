const admin = require('../../config/firebase') ;


async function saveSearchToFirebase(query, userId, result) {
  const db = admin.firestore();
  const docRef = db.collection("searches").doc();

  await docRef.set({
    query,
    userId,
    result, // objeto con recomendaciones IA
    createdAt: new Date()
  });

  return { id: docRef.id, query, result };
  }

module.exports = { saveSearchToFirebase };
