console.log('Service Worker works')

self.addEventListener('push', (e) => { // self hace referencia a ese mismo archivo, el addEventListener ejecutara la funcion que estan el segundo parametro cada vez que escuche el evento push
    
    const data = e.data.json() // data.json() lo que hace es convertir los datos que llegan en formato JSON
    console.log('notificacion recibida!')

    self.registration.showNotification(data.title, { // muestra la notificacion en pantalla
        body: data.message,
        icon: "https://e7.pngegg.com/pngimages/618/701/png-clipart-wellbridge-of-rochester-hills-health-care-medicine-nursing-registered-nurse-logo-medical-thumbnail.png"
    })
})