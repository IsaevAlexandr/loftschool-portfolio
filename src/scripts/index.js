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
/* Валидация формы */

// находим кнопку
const submitBtn = document.querySelector('.login__input-submit');

// представляем данные формы в виде объекта
let indexForm = {
    loginField: {
        element: document.querySelectorAll('.login__input')[0],
        popUp: document.querySelectorAll('.login__pop-up')[0]
    },
    passwordField: {
        element: document.querySelectorAll('.login__input')[1],
        popUp: document.querySelectorAll('.login__pop-up')[1]
    },
    showError(element) {
        element.element.classList.add('login__input_error');
        element.popUp.style.display = 'block';
        setTimeout(function() {
            element.popUp.style.display = 'none';
        }, 2000)
    },
    showCorrect(element) {
        element.element.classList.add('login__input_correct');
    },
    resetField(element, full = false) {
        element.popUp.style.display = 'none'
        element.element.className = 'login__input';
        if (full) {
            element.element.value = '';
        }
    }
}

// создаем конфиг, по каким парамертам будем проверять поля
const config = {
    login: ['isNonEmpty', 'isAlphaNum'],
    password: 'isNonEmpty'
}

// создаем экземпляр объекта валидатора
const validator = new Validator(config);

// по щелчку мыши собираются данные из полей форм.
// сообщения об ошибках заносятся в массив validator.messages
// 
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let data = {
        login: indexForm.loginField.element.value,
        password: indexForm.passwordField.element.value
    };

    validator.validate(data);
    if (validator.hasErrors()) {

        indexForm.resetField(indexForm.loginField);
        indexForm.resetField(indexForm.passwordField);

        if (validator.messages.login) {

            indexForm.loginField.popUp.innerHTML = validator.messages.login;
            indexForm.showError(indexForm.loginField);

        }

        if (!validator.messages.login) {

            indexForm.showCorrect(indexForm.loginField);
            indexForm.passwordField.popUp.innerHTML = validator.messages.password;
            indexForm.showError(indexForm.passwordField);

        }

    } else {

        indexForm.showCorrect(indexForm.loginField);
        indexForm.showCorrect(indexForm.passwordField);

        // заглушка
        setTimeout(() => {
            indexForm.resetField(indexForm.loginField, true);
            indexForm.resetField(indexForm.passwordField, true);
        }, 3000);

    }
});