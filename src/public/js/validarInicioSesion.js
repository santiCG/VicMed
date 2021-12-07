const form = document.getElementById('form');
const username = document.getElementById('username')
const password = document.getElementById('password')

//var n = 0


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    /*
    if (checkInputs() == true) {
        let usernamesesion = username.value.trim();
        let miSesión = { 'username': usernamesesion, 'hora': 'css3' };

        // Guardo el objeto como un string
        localStorage.setItem('sesion', JSON.stringify(miSesión));
        window.location.href = './index.html'
    } else {
        alert("Datos de inicio de sesión errados, intente de nuevo");
    }
    */
});

/*
async function searchUser(usernameValue) {
    let response = await fetch('/usuariosus/' + usernameValue,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
        .then(data => {
            if (data.username != null) {
                console.log(data.username);
                return true
            }
        }).catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
            return false
        });
}
*/
/*
async function check_password(passwordValue) {
    let response = await fetch('/usuariosps/' + passwordValue,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json())
        .then(data => {
            if (data.username != null) {
                console.log(data.username);
                return true
            }
        }).catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
            return false
        });
}
*/
async function checkInputs() {
    console.log("me ejecuté")
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    let check_control = 0

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        let response = await fetch('/usuariosus/' + usernameValue,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(response => response.json())
            .then(data => {
                if (data.username != null) {
                    setSuccessFor(username);
                    check_control += 1
                    console.log(data.username);
                    //return true
                }
            }).catch(function (error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
                //return false
            });
        /*
        if (searchUser(usernameValue) == true) {
            setSuccessFor(username);
            check_control += 1
        }*/
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        let response = await fetch('/usuariosps/' + passwordValue,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(response => response.json())
            .then(data => {
                if (data.username != null) {
                    setSuccessFor(password);
                    check_control += 1
                    console.log(data.username);
                    //return true
                }
            }).catch(function (error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
                //return false
            });
        /*if (check_password(passwordValue) == true) {
            setSuccessFor(password);
            check_control += 1
        }*/
    }

    console.log(check_control);

    if (check_control === 2) {
        console.log("Dio true gente");
        let usernamesesion = username.value.trim();
        let miSesión = { 'username': usernamesesion, 'hora': 'css3' };

        // Guardo el objeto como un string
        localStorage.setItem('sesion', JSON.stringify(miSesión));
        window.location.href = './index.html'
        return true
    } else {
        console.log("Dio false gente");
        alert("Datos de inicio de sesión errados, intente de nuevo");
        return false
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
