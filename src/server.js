const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());

// CORS opcional (caso tenha frontend separado)
try {
    const cors = require("cors");
    app.use(cors());
} catch (err) {
    console.log("CORS não instalado, seguindo normalmente.");
}

// Health check (Render usa para manter o serviço vivo)
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

// Rotas principais da API
app.use("/api", routes);

// Porta dinâmica (Render) + fallback local
const port = process.env.PORT || process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log(`API Shopee rodando na porta ${port}`);
});