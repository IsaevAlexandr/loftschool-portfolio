console.log('index page')
import { toggleClass } from './common/helpers'
import Validator from './common/validator'

var autorizeBtn = document.querySelector('.autorization-btn');
var resumeBtn = document.querySelector('.resume');

/* Listen events for flip index page */
autorizeBtn.addEventListener('click', function() {
    toggleClass('intro__content', 'active');
    autorizeBtn.style.visibility = 'hidden';
});
resumeBtn.addEventListener('click', function() {
    toggleClass('intro__content', 'active');
    autorizeBtn.style.visibility = 'visible';
});


//=========================
/* how to validate filds */
const submitBtn = document.querySelector('.login__input-submit');

let loginField = {
        element: document.querySelectorAll('.login__input')[0],
        popUp: document.querySelectorAll('.login__pop-up')[0]
    }
    // console.log(loginField.popUp)
let passwordField = {
    element: document.querySelectorAll('.login__input')[1],
    popUp: document.querySelectorAll('.login__pop-up')[1]
}

const config = {
    login: ['isNonEmpty', 'isNumber', 'isAlphaNum'],
    password: 'isNonEmpty'
}
const validator = new Validator(config);
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let data = {
        login: loginField.element.value,
        password: passwordField.element.value
    };

    validator.validate(data);
    if (validator.hasErrors()) {

        if (validator.messages.login) {
            loginField.popUp.innerHTML = validator.messages.login;
            loginField.popUp.style.display = 'block';
            loginField.element.classList.toggle('login__input_error');
            setTimeout(function() {
                loginField.popUp.style.display = 'none';
            }, 1000)
        }

        if (!validator.messages.login) {
            passwordField.popUp.innerHTML = validator.messages.password;
            passwordField.popUp.style.display = 'block';
            passwordField.element.classList.toggle('login__input_error');
            setTimeout(function() {
                passwordField.popUp.style.display = 'none';
            }, 1000)
        }

    };
});