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

export{
    registrar
} 