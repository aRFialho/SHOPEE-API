require("dotenv").config();
const crypto = require("crypto");
const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();

// Middleware JSON
app.use(express.json());

// CORS opcional
try {
    const cors = require("cors");
    app.use(cors());
} catch (err) {
    console.log("CORS não instalado, seguindo normalmente.");
}

// Health check (Render e monitoramento)
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

// Rotas principais
app.use("/api", routes);

module.exports = app;