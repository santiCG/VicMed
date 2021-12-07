require('dotenv').config() // este modulo sirve para leer los archivos .env en los que almacenamos variables de entorno como las llaves publica/privada

const express = require('express')
const morgan = require('morgan')
const path = require('path') // este modulo nos ayuda a unir nombres de diretorios
const mongoose = require('mongoose');

const url='mongodb://127.0.0.1:27017/health';
mongoose.connect(url);

const app = express() // esto inicia el modulo espress

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json()) // nos permite convertir inputs en formato http a JSON

// Routes
app.use(require('./routes/index.js')) // indica la ruta en la que se indica el index.js

// Static Content
app.use(express.static(path.join(__dirname, 'public'))) // __dirname nos da la ruta completa de la carpeta en la que estamos

app.listen(3000) // 3000 indica el puerto en el que se esta corriendo el servidor

console.log('Server listening...') // nos indica que el servidor ya esta corriendo o escuchando