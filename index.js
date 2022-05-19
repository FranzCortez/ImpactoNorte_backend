import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import publicRoutes from "./routes/publicRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOption = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            callback(null,true);
        } else {
            callback(new Error("No Permitido por CORS"));
        }
    }
}

app.use(cors(corsOption));

app.use('/api/public', publicRoutes);
app.use('/api/usuario', usuarioRoutes);

// Conexión 
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});