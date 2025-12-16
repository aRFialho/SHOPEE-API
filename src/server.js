require("dotenv").config();
const app = require("./app");

const port = process.env.PORT || process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log(`API Shopee rodando na porta ${port}`);
});