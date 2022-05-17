import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

app.use("/", (req,res) => {
    res.send("Hola Mundo");
});

// Conexión 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});