import express from "express";
import { 
    registrar,
    login,
    perfil
} from "../controllers/usuarioController.js";
import { 
    registrarCliente,
    verClientes
} from "../controllers/clienteController.js"; 
import { 
    registrarContacto 
} from "../controllers/contactoClienteController.js";
import checkAuth from "../middleware/authMiddleware.js";


const router = express.Router();

// Inicio de sesion
router.post('/login', login);

// clientes
router.get('/cliente', checkAuth, verClientes);
router.post('/cliente/registrar', checkAuth, registrarCliente);
router.post('/cliente/registrar/contacto', checkAuth, registrarContacto);

// perfil
router.get('/perfil', checkAuth, perfil);
router.post('/perfil/registrar', checkAuth, registrar);

export default router;