const { Router } = require('express') // Router es un objeto que nos permite definir rutas
const router = Router()
// const usuario = require('../public/models/usuario.js');

const webpush = require('../webpush')
let pushSubscription

router.get('/usuarios', async function (req, res) {
    usuario.find().then(function (usuarios) {
        res.send(usuarios);
    });
})

router.post('/usuarios', async function (req, res) {
    usuario.create(req.body).then(function (usuario) {
        res.send(usuario);
    });
})

router.post('/subscription', async (req, res) => {  // escuchar una ruta llamada subscription 
    pushSubscription = req.body // guardamos en la variable pushSubscription las peticiones que nos van llegando
    console.log(pushSubscription)

    // Servers response
    res.status(200).json() // responder con un estado 200
});

router.post('/new_message', async (req, res) => {

    const { message } = req.body

    const data_noty = JSON.stringify({  // este es un objeto que guardara los datos que enviaremos en la notificacion, JSON.stringify es un metodo para comvertir el objeto en un string
        title: 'Hey!, es hora de tu mediciona',
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