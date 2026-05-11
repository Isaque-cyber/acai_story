const express = require("express");

const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Acai Story API");
});

app.use("/produtos", produtoRoutes);

module.exports = app;