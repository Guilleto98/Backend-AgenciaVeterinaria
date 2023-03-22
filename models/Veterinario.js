import mongoose from "mongoose";

const veterinarioSchema = mongose.Schema({
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
    },
    confirmado: {
        type: Boolean,
        default: false
    }
})

const veterinario = mongoose.model("Veterinario", veterinarioSchema);

export default veterinario