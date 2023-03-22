import express from "express";

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Desde API/Veterinarios')
});

router.get('/login', (req,res)=>{
    res.send('Desde API/Veterinarios/login')
});

export default router;