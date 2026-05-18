import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import express from "express"
import acaiRoutes from './routes/acaiRoutes.js'
import cors from "cors"
import userRoutes from "./routes/userRoutes.js";

const app = express()
app.use(cors()) 
app.use(express.json())

// rotas
app.use("/acais", acaiRoutes),
app.use("/usuarios", userRoutes)

app.get("/", (req, res) =>{
    res.send("Bem vindo á API de Açaís")
})

export default app