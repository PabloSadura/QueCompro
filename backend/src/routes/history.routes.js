const express = require("express");
const { getUserHistory } = require("../controllers/history.controller");
const { verifyFirebaseToken } = require("../middleware/auth");

const router = express.Router();

router.get("/history", verifyFirebaseToken, getUserHistory);

module.exports = router;
