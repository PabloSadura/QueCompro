const express = require("express");
const router = express.Router();
const { handleSearchStream } = require("../controllers/search.controller");
const { verifyFirebaseToken } = require("../middleware/auth");

// GET SSE
router.get("/stream", verifyFirebaseToken, handleSearchStream);

module.exports = router;
