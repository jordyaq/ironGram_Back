const mongoose = require('mongoose')
const Schema = mongoose.Schema


const pictureSchema = new Schema({
    nombre: String,
    apellido: String,
    pais: String,
    ciudad: String,
    postal: String,
    pago: String,
    correo: String,
    telefono: String,

    botella: String,  
    numbotella: Number,
    
    caja: String,
    numcaja: Number
})

module.exports = mongoose.model('Formulario', pictureSchema)