import Cliente from "../models/Cliente.js";

const registrarCliente = async (req, res) => {

    const { rut } = req.body;

    const existeCliente = await Cliente.findOne({rut});

    if(existeCliente){
        const error = new Error('El Cliente ya fue registrado anteriormente');
        return res.status(400).json({ msg: error.message });
    }

    try {
        
        // Guardar
        const cliente = new Cliente(req.body);
        const clienteGuardado = await cliente.save();

        res.send(clienteGuardado);

    } catch (error) {
        console.log(error);
    }
}

const verClientes = async (req, res) => {

    const listaClientes = await Cliente.find();
    res.send(listaClientes);
}

export {
    registrarCliente,
    verClientes
}