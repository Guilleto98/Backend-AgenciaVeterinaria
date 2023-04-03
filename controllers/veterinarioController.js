import mongoose from 'mongoose';
import Veterinario from '../models/Veterinario.js';

const registrar = async (req, res) => {
    
    const {email} = req.body;

    // Bloquear usuarios duplicados
    const existeUsuario = await Veterinario.findOne({ email })

    if(existeUsuario){
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
    }

    try {
      console.log(req.body)
      const veterinario = new Veterinario(req.body);
      const veterinarioGuardado = await veterinario.save();
      res.json(veterinarioGuardado);
    } catch (error) {
      console.log(error);
    }
  }

const perfil = (req,res)=>{
    res.json({MSJ: 'Mostrando perfil...'})
}

const confirmar = async (req,res)=>{
    const token = req.params.token;
    
    const usuarioConfirmar = await Veterinario.findOne({token})

    if(!usuarioConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message})
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save()

        res.json({msg: 'Usuario confirmado correctamente'})
    } catch (error) {
        console.log(error)
    }
}

export {
    registrar,
    perfil,
    confirmar
}