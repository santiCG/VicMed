console.log('Service Worker works')

self.addEventListener('push', (e) => { // self hace referencia a ese mismo archivo, el addEventListener ejecutara la funcion que estan el segundo parametro cada vez que escuche el evento push
    
    const data = e.data.json() // data.json() lo que hace es convertir los datos que llegan en formato JSON
    console.log('notificacion recibida!')

    self.registration.showNotification(data.title, { // muestra la notificacion en pantalla
        body: data.message,
        icon: "https://i.pinimg.com/originals/d9/cb/8f/d9cb8fb8eb3f4ae6fcc751faebc0b5f4.png"
    })
})