import Pacientes from "../models/Pacientes.js"

const agregarPaciente = async(req,res)=>{
    const paciente = new Pacientes(req.body);
    paciente.veterinario = req.veterinario._id

    try {
        const pacienteGuardado = await paciente.save();
        res.json(pacienteGuardado)
    } catch (error) {
        console.log(error)
    }
}

const obtenerPacientes = async(req,res)=>{
    const pacientes = await Pacientes.find().where('veterinario').equals(req.veterinario)
    res.json(pacientes)
}

const obtenerPaciente = async(req,res)=>{
    const {id} = req.params
    const paciente = await Pacientes.findById(id)

    if(!paciente){
       return res.status(404).json({msg:'Paciente no encontrado'})
    }

    // Validar que el paciente corresponda al veterinario
    // con este codigo solo el veterinario correspondiente podra acceder a la info
    if( paciente.veterinario._id.toString() != req.veterinario._id.toString() ){
        return res.json({msg: 'Acción no válida'})
    }

    
    res.json(paciente);
    
    
}

const actualizarPaciente = async(req,res)=>{
    const {id} = req.params
    const paciente = await Pacientes.findById(id)

    if(!paciente){
       return res.status(404).json({msg:'Paciente no encontrado'})
    }

    // Validar que el paciente corresponda al veterinario
    // con este codigo solo el veterinario correspondiente podra acceder a la info
    if( paciente.veterinario._id.toString() != req.veterinario._id.toString() ){
        return res.json({msg: 'Acción no válida'})
    }

    
    //Actualizar paciente
    paciente.nombre = req.body.nombre;
    paciente.propietario = req.body.propietario || paciente.propietario;
    paciente.email = req.body.email || paciente.email;
    paciente.fecha = req.body.fecha || paciente.fecha;
    paciente.sintomas = req.body.sintomas || paciente.sintomas;

    try {
        const pacienteActualizado = await paciente.save();
        res.json(pacienteActualizado);
    } catch (error) {
        console.log(error);
    }
}

const eliminarPaciente = async(req,res)=>{
    const {id} = req.params
    const paciente = await Pacientes.findById(id)

    if(!paciente){
        return res.status(404).json({msg:'Paciente no encontrado'})
    }

    // Validar que el paciente corresponda al veterinario
    // con este codigo solo el veterinario correspondiente podra acceder a la info
    if( paciente.veterinario._id.toString() != req.veterinario._id.toString() ){
        return res.json({msg: 'Acción no válida'})
    }

    try {
        await paciente.deleteOne()
        res.json({msg: 'Paciente eliminado con exito'})
    } catch (error) {
        console.log(error)
    }
    
}

export {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
}