import mongoose from "mongoose";
import generarId from "../helpers/generarId.js";


const veterinarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trime: true,
    },
    telefono: {
        type: String,
        default: null,
    },
    web: {
        type: String,
        default: null,
    },
    token: {
        type: String,
        default: generarId(),
    },
    confirmado: {
        type: Boolean,
        default: false
    }
})

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);

export default Veterinario