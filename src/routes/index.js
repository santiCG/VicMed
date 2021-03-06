
const { Router } = require('express') // Router es un objeto que nos permite definir rutas
const router = Router()
const usuario = require('../public/models/usuario.js');
const medicamento = require('../public/models/medicamento.js');
const schedule = require('../public/models/schedule.js');

const webpush = require('../webpush')
let pushSubscription

router.get('/usuarios', async function (req, res) {
    usuario.find().then(function (usuarios) {
        res.send(usuarios);
    });
})

//Login routes

router.get('/usuariosus/:username', async function (req, res) {
    usuario.findOne({ username: req.params.username }).then(function (usuario) {
        res.send(usuario);
    });
});

router.get('/usuariosps/:password', async function (req, res) {
    usuario.findOne({ password: req.params.password }).then(function (usuario) {
        res.send(usuario);
    });
});


router.get('/usuarioslog/:username/:password', async function (req, res) {
    usuario.findOne({$and:[{ username: req.params.username }, {password:req.params.password}]}).then(function (usuario) {
        res.send(usuario);
    });
});

//here

//Create usuarios

router.post('/usuarios', async function (req, res) {
    usuario.create(req.body).then(function (usuario) {
        res.send(usuario);
    });
})

//here


//get medicamentos

router.get('/medicamento/:nombre', async function (req, res) {
    medicamento.findOne({ nombre: req.params.nombre }).then(function (medicamento) {
        res.send(medicamento);
    });
});

router.post('/medicamento', async function (req, res) {
    medicamento.create(req.body).then(function (medicamento) {
        res.send(medicamento);
    });
})

router.get('/medicamentos', async function (req, res) {
    medicamento.find().then(function (medicamentos) {
        res.send(medicamentos);
    });
});

//here

//post schedule with meds
router.post('/schedule', async function (req, res) {
    schedule.create(req.body).then(function (schedule) {
        res.send(schedule);
    });
})

router.get('/schedules', async function (req, res) {
    schedule.find().then(function (schedules) {
        res.send(schedules);
    });
});

//here
//

router.post('/subscription', async (req, res) => {  // escuchar una ruta llamada subscription 
    pushSubscription = req.body // guardamos en la variable pushSubscription las peticiones que nos van llegando

    // Servers response
    res.status(200).json() // responder con un estado 200
});

router.post('/new_message', async (req, res) => {

    const { message } = req.body

    const data_noty = JSON.stringify({  // este es un objeto que guardara los datos que enviaremos en la notificacion, JSON.stringify es un metodo para comvertir el objeto en un string
        title: 'Hey!, es hora de tu medicina',
        message
    })
    res.status(200).json()

    try { // los try catch sirven para atrapar y manejar los errores, si todo va bien se ejecutara lo que halla en el bloque try, si algo sale mal se ejecutara lo que halla en el bloque catch

        await webpush.sendNotification(pushSubscription, data_noty) // la funcion sirve para enviar las notificaciones, el primer parametro indica a donde debemos enviar las notificaciones, y el segundo que mensaje vamos a enviar en ellas
    } catch (error) {
        console.log(error) // mostrar el error en la ejecucion
    }
});

module.exports = router;