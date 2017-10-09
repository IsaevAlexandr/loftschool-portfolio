import Validator from './validator'

let IndexFormValidation = (function() {
    function init() {
        const submitBtn = document.querySelector('.login__input-submit');

        // представляем данные формы в виде объекта
        let indexForm = {
            loginField: {
                input: document.querySelectorAll('.login__input')[0],
                popUp: document.querySelectorAll('.login__pop-up')[0],
                icon: document.querySelectorAll('.login__icon')[0]
            },
            passwordField: {
                input: document.querySelectorAll('.login__input')[1],
                popUp: document.querySelectorAll('.login__pop-up')[1],
                icon: document.querySelectorAll('.login__icon')[1]
            },
            showError(element) {
                element.input.classList.add('login__input_error');
                element.popUp.style.display = 'block';
                element.icon.style.fill = '#e44845';
                setTimeout(function() {
                    element.popUp.style.display = 'none';
                }, 2000)
            },
            showCorrect(element) {
                element.input.classList.add('login__input_correct');
                element.icon.style.fill = '#6c9d5a';
            },
            resetField(element, full = false) {
                element.popUp.style.display = 'none'
                element.input.className = 'login__input';
                element.icon.style.fill = '#c5ccce';

                /* сбрасывать значение формы, по умолчанию нет */
                if (full) {
                    element.input.value = '';
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
                login: indexForm.loginField.input.value,
                password: indexForm.passwordField.input.value
            };

            validator.validate(data);
            indexForm.resetField(indexForm.loginField);
            indexForm.resetField(indexForm.passwordField);
            if (validator.hasErrors()) {



                /* если поле логина и поле пароля не верно */
                if (validator.messages.login && validator.messages.password) {

                    indexForm.loginField.popUp.innerHTML = validator.messages.login;
                    indexForm.showError(indexForm.loginField);
                    indexForm.showError(indexForm.passwordField);
                    /* костыль */
                    indexForm.passwordField.popUp.style.display = 'none';

                } else {
                    /* если поле логина не верно */
                    if (validator.messages.login) {

                        indexForm.loginField.popUp.innerHTML = validator.messages.login;
                        indexForm.showError(indexForm.loginField);
                        indexForm.showCorrect(indexForm.passwordField);

                    } else {
                        /* если поле пароля не верно */

                        indexForm.showCorrect(indexForm.loginField);
                        indexForm.passwordField.popUp.innerHTML = validator.messages.password;
                        indexForm.showError(indexForm.passwordField);

                    }
                }


            } else {

                indexForm.showCorrect(indexForm.loginField);
                indexForm.showCorrect(indexForm.passwordField);

                // имитация отправки формы
                setTimeout(() => {
                    indexForm.resetField(indexForm.loginField, true);
                    indexForm.resetField(indexForm.passwordField, true);
                }, 200);

            }
        });
    }
    return {
        init: init
    }
})()

export default IndexFormValidation;