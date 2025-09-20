const admin = require("firebase-admin");
const path = require("path");

const serviceAccountPath = path.resolve(__dirname, "../../serviceAccountKey.json");

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(require(serviceAccountPath)),
    });
 ;
    console.log("✅ Firebase Admin inicializado correctamente");
  }
} catch (err) {
  console.error("❌ Error al inicializar Firebase Admin:", err);
  process.exit(1);
}

module.exports = admin;
