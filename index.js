import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import publicRoutes from "./routes/publicRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();


app.use('/api/public', publicRoutes);
app.use('/api/usuario', usuarioRoutes);

// Conexión 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});