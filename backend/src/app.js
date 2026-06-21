import pool from "./config/db.js"
import express from "express";
import cors from "cors";
/**import produtoRoutes from "./routes/produtoRoutes.js";*/

const app = express();

app.use(cors());
app.use(express.json());

/*app.use("/produto", produtoRoutes);*/

app.get("/", (req, res) => {
  res.json({
    message: "API Acai Story funcionando",
  });
});






app.get("/teste", async (req, res) => {

  try{
    const resultado = await pool.query("SELECT NOW()");

    res.json({
      sucesso: true,
      banco: resultado.rows[0],
    });
  } catch (erro){
    console.error(erro);

    res.status(500).json({
      sucesso: false,
      erro: erro.message,
    });
  }
});








export default app;

