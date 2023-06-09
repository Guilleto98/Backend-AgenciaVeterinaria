import express from "express";
import {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    nuevoPassword,
    comprobarToken,
    actualizarPerfil,
    actualizarPassword
} from '../controllers/veterinarioController.js'
import chekAuth from "../middlwere/authMiddlewere.js";

const router = express.Router();


// Area Pública
router.post('/', registrar );
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword );
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword)

// Area Privada
router.get('/perfil', chekAuth, perfil);
router.put('/perfil/:id', chekAuth, actualizarPerfil )
router.put('/actualizar-password', chekAuth, actualizarPassword)


export default router;