import mongoose, { mongo } from "mongoose";
import generarId from "../helpers/generarId.js";

const clienteSchema = mongoose.Schema({
    rut: {
        type: String,
        required: true,
        unique: true
    },
    razon: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    giro: {
        type: String,
        trim: true
    }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;