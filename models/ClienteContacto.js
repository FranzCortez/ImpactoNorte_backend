import mongoose from "mongoose";

const clienteContactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    cargo: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        trim: true
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    }
});

const ClienteContacto = mongoose.model("ClienteContacto", clienteContactoSchema);

export default ClienteContacto;