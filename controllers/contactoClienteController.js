import ClienteContacto from "../models/ClienteContacto.js";

const registrarContacto = async (req, res) => {

    try {
        
        const contacto = new ClienteContacto(req.body);
        const contactoGuardado = await contacto.save();

        res.send(contactoGuardado);

    } catch (error) {
        console.log(error);
    }
}

export{
    registrarContacto
}