function showSesion() {
    //Función para mostrar nombre de usuario si está logeado usanod local storage
    if (localStorage.getItem("sesion") != null) {
        let showuserbox = document.getElementById('showuserbox');
        let SesionGuardado = localStorage.getItem('sesion');
        let nombreuser = JSON.parse(SesionGuardado);
        console.log(nombreuser.username)
        console.log(showuserbox);
        console.log('objetoObtenido: ', JSON.parse(SesionGuardado));
        showuserbox.innerHTML = nombreuser.username;
        validarSesión();
    } else {
        console.log("waiting session");
        validarSesión();
    }
}


function logOut() {
    //Función para cerrar la sesión
    //console.log("Vas a cerrar sesión hijo de l papaya");
    localStorage.removeItem('sesion');
    window.location.href = './index.html';
    showSesion();
}

function validarSesión() {
    //Validar que se puede mostrar sin iniciar sesión y coultar elementos si no es así
    let elementsAll = document.querySelectorAll(".sesionElements");
    let botonregistro = document.getElementById("boton_reg");
    let botonlogin = document.getElementById("boton_login");
    console.log(elementsAll);
    if (localStorage.getItem("sesion") != null) {
        console.log(elementsAll);
        botonregistro.setAttribute("style", "display:none")
        botonlogin.setAttribute("style", "display:none")
        elementsAll.forEach(element => {
            element.setAttribute("style", "display:block");
        });
    } else {
        botonregistro.setAttribute("style", "display:block")
        botonlogin.setAttribute("style", "display:block")
        elementsAll.forEach(element => {
            element.setAttribute("style", "display:none");
        });
    }
}

showSesion();