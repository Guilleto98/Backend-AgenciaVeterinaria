import express from 'express';
import { 
    agregarPaciente,
    obtenerPacientes, 
    obtenerPaciente, 
    actualizarPaciente, 
    eliminarPaciente } from '../controllers/pacienteController.js';
import chekAuth from '../middlwere/authMiddlewere.js';

const router = express.Router();

router
    .route('/')
    .post(chekAuth, agregarPaciente)
    .get(chekAuth, obtenerPacientes)

router
    .route('/:id')
    .get(chekAuth, obtenerPaciente)
    .put(chekAuth, actualizarPaciente)
    .delete(chekAuth, eliminarPaciente)

export default router;