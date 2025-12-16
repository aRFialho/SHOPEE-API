require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();

// Middleware para JSON
app.use(express.json());

// CORS (opcional — útil para frontend externo)
try {
    const cors = require("cors");
    app.use(cors());
} catch (err) {
    console.log("CORS não instalado, continuando sem ele.");
}

// Rota de saúde (necessária no Render)
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

// Rotas principais
app.use("/api", routes);

module.exports = app;