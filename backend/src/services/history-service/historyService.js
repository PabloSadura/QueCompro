const admin = require("../../config/firebase");

async function saveHistory({ userId, query, fuzzy, tokensUsed }) {
  const docRef = await admin.firestore().collection("histories").add({
    userId,
    query,
    fuzzy,
    tokensUsed,
    createdAt: new Date()
  });
  return { id: docRef.id, status: "saved" };
}

async function getUserHistories(userId) {
  const snapshot = await admin.firestore().collection("histories")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

module.exports = { saveHistory, getUserHistories };
