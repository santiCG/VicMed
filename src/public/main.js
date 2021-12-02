const PUBLIC_VAPID_KEY = 'BM0F8lqVqj-p7ona7Z04RweRSQz4cnFibXqAyRAPg81KMr-jMMe7Gs_gCH5bXTBoipdBgc7WaOzItTZ8KzNv6nA'

function urlBase64ToUint8Array(base64String) { // esta funcion sirve para convertir a la llave publica de un formato String a un formato Uint8Array

    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
    
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const subscription = async () => { // la palabra asyn indica que la funcion es asincrona

    console.log('Registering a new service worker')

    // un Service Worker es un script que su navegador ejecuta en segundo plano, separado de una página web, lo que abre la puerta a funciones que no necesitan una página web o la interacción del usuario. Hoy en día, ya incluyen funciones como notificaciones automáticas y sincronización en segundo plano
    const register = await navigator.serviceWorker.register('./serviceWorker.js', { // aqui estamos registrando el Service Worker en la pagina
        scope: '/' // el alcanze que va a tener el SW
    })
    console.log('new Service Worker')

    // Escuchando notificaciones push
    console.log('Listening Push Notifications')
    // const unsubscribe = await register.unregister() // esta funcion sirve para Desuscribir al usuario, pero solo la use para solucionar un error

    const subscription = await register.pushManager.subscribe({ // esto sera un objeto usado por el servidor para conectarse y enviar notificacion cada vez que quiera
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY) // esta es la llave publica del servidor
    })
    console.log(subscription)

    // enviar notificacion
    await fetch('/subscription', { // esta es una peticion que se le hace al servidor
        method: 'POST', // metodo de envio de datos
        body: JSON.stringify(subscription), // este es el dato que le enviaremos al servidor para usar la conexion web-push
        headers: {
            "Content-Type": "application/json" // es el tipo de informacion que enviaremos
        }
    })
    console.log('¡Susbcribed!') 
}

const form = document.querySelector('#myform') // #myform = id del formulario
// const message = document.querySelector('#message') // #message = id del input por el que vamos a escribir el mensaje

form.addEventListener('submit', (e) => {
    e.preventDefault() // esto lo que hace es anular la funcion por defecto de un form, que es resetear todo

    fetch('/new_message', {
        method: 'POST',
        // body: JSON.stringify({
        //     message: message.value // esto indica que el mensaje que enviaremos sera el valor contenido en el input del formulario
        // }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    form.reset() // esta funcion resetea los datos del formulario
})

// Service Worker Support
if ("serviceWorker" in navigator) {
    subscription().catch(err => console.log(err));
}