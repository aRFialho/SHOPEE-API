const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api", routes);

const port = process.env.PORT || process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log(`Shopee API running on port ${port}`);
});