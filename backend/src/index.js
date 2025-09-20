require("dotenv").config();
const express = require("express");
const cors = require("cors");
const requestLogger = require("./middleware/requestLogger");
const searchRoutes = require("./routes/search.routes");
const historyRoutes = require("./routes/history.routes");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(requestLogger);

// Rutas
app.use("/api/search", searchRoutes);
app.use("/api/history", historyRoutes)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
