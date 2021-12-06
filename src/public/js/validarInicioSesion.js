const form = document.getElementById('form');
const username = document.getElementById('username')
const password = document.getElementById('password')

var n = 0


form.addEventListener('submit', e => {
	e.preventDefault();
    
    if(checkInputs() == true) {

        window.location.href = './index.html'
    }
});

function searchUser() {

    for (let i = 0; i < registros.length; i++) {
        
        if(registros[i].username === username.value) {
            n = i
            return true
        }
    }
	setErrorFor(username, 'Sorry, we do not find this user');
    return false
}

function check_password() {
    if(registros[n].password === password.value) {     
        return true
    }
    else {
	    setErrorFor(password, 'Sorry, the password do not match with the user');
        return false
    }
}

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
    var check_control = 0
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
        if(searchUser() == true) {
    		setSuccessFor(username);
            check_control += 1
        }
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
        if(check_password() == true) {
            setSuccessFor(password);
            check_control += 1
        }
	}

    if (check_control === 2) {
        return true
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