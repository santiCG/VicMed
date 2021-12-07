const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Definimos los modelos para tener orden en nuestra bd no rel

const scheduleSchema = new Schema({
    nombreMedicamento:String,
    usuario:String,
    intervalodosis:Number,
    fechainicio:Date
});

const schedule = mongoose.model('schedule', scheduleSchema, 'schedule');
module.exports = schedule;