const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();

    //values
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

        const user = {
            username: usernameValue,
            email: emailValue,
            password: passValue
        };
//save in local storage
        localStorage.setItem("user",JSON.stringify(user))


});

//msg  error
const error = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
//msg succ
const success = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const EmailValid = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    //value
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();
    const passValue2 = password2.value.trim();



    //validation username
    if(usernameValue === '') {
        error(username, 'Username is required');
    } else {
        success(username);
    }
  //validation email
    if(emailValue === '') {
        error(email, 'Email is required');
    } else if (!EmailValid(emailValue)) {
        error(email, 'Provide a valid email address');
    } else {
        success(email);
    }
  //validation pass
    if(passValue === '') {
        error(password, 'Password is required');
    } else if (passValue.length < 8 ) {
        error(password, 'Password must be at least 8 character.')
    } else {
        success(password);
    }

    if(passValue2 === '') {
        error(password2, 'Please confirm your password');
    } else if (passValue2 !== passValue) {
        error(password2, "Passwords doesn't match");
    } else {
        success(password2);
    }

    if(usernameValue && emailValue && password && password2 ){
        window.location.href = "home.html"; 
    }
};

