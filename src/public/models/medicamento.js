const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Definimos los modelos para tener orden en nuestra bd no rel

const medicamentosSchema = new Schema({
    nombre:String,
    fabricante:String,
    via:String,
    tipo:String,
    descripcion:String,
    intervalodosis:Number
});

const medicamento = mongoose.model('medicamento', medicamentosSchema, 'medicamento');
module.exports = medicamento;