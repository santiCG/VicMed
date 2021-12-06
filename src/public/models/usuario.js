const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Definimos los modelos para tener orden en nuestra bd no rel

const usuarioSchema = new Schema({
    username:String,
    email:String,
    password:String,
});

const usuario = mongoose.model('usuario', usuarioSchema, 'usuarios');
module.exports = usuario;
