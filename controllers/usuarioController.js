import generarJWT from "../helpers/generarJWT.js";
import Usuario from "../models/Usuario.js";

const registrar = async (req, res) => {

    const { email, nombre } = req.body;

    const existeUsuario = await Usuario.findOne({email});

    if(existeUsuario) {
        const error = new Error('El Usuario ya esta registrado con ese correo');
        return res.status(400).json({ msg: error.message });
    }

    try {

        // Guarda
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();

        // TODO: Correo
        res.send(usuarioGuardado);

    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    
    const { email, password } = req.body;
    
    const usuario = await Usuario.findOne({email});

    if(!usuario){
        const error = new Error("Usuario no válido");
        return res.status(404).json({msg: error.message});
    }

    if ( await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id)
        });
    }else {
        const error = new Error("La contraseña y/o correo es incorrecto");
        return res.status(403).json({ msg: error.message });
    }
}

const perfil = async (req, res) => {

    const { usuario } = req;

    res.send({usuario});
}

export{
    registrar,
    login,
    perfil
} 