import express from "express";
import { 
    registrar 
} from "../controllers/usuarioController.js";
import { 
    registrarCliente,
    verClientes
} from "../controllers/clienteController.js"; 
import { 
    registrarContacto 
} from "../controllers/contactoClienteController.js";


const router = express.Router();

// clientes
router.get('/cliente', verClientes);
router.post('/cliente/registrar', registrarCliente);
router.post('/cliente/registrar/contacto', registrarContacto);

// perfil
router.post('/perfil/registrar', registrar);

export default router;