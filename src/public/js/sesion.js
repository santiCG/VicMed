function showSesión() {
    let SesionGuardado = localStorage.getItem('sesion');
    console.log('objetoObtenido: ', JSON.parse(SesionGuardado));
}

showSesión();