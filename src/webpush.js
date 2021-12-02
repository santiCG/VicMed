const webpush = require('web-push')
const { PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY } = process.env;

// el objeto process nos permite acceder a las variables de entorno que estan 
// asignadas al sistema oprativo en este caso son las llaves, PUBLIC/PRIVATE_VAPID_KEY
webpush.setVapidDetails(
    'mailto: example@gmail.com', 
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
)

module.exports = webpush