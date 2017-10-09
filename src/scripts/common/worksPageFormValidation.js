import Validator from './validator'

let worksFormValidation = (function() {
    function init() {
        const submitBtn = document.querySelectorAll('.feedback-form__btn')[0];
        const resetBtn = document.querySelectorAll('.feedback-form__btn')[1];

        // представляем данные формы в виде объекта
        let indexForm = {
            nameField: {
                input: document.querySelectorAll('.feedback-form__input')[0],
                popUp: document.querySelectorAll('.feedback__pop-up')[0],
            },
            emailField: {
                input: document.querySelectorAll('.feedback-form__input')[1],
                popUp: document.querySelectorAll('.feedback__pop-up')[1],
            },
            showError(element) {
                element.input.classList.add('feedback-form__input_error');
                element.popUp.style.display = 'block';
                setTimeout(function() {
                    element.popUp.style.display = 'none';
                }, 2000)
            },
            showCorrect(element) {
                element.input.classList.add('feedback-form__input_correct');
            },
            resetField(element, full = false) {
                element.popUp.style.display = 'none'
                element.input.className = 'feedback-form__input';

                /* сбрасывать значение формы, по умолчанию нет */
                if (full) {
                    element.input.value = '';
                }
            }
        }


        /* сброс формы */
        resetBtn.addEventListener('click', () => {
            indexForm.resetField(indexForm.nameField);
            indexForm.resetField(indexForm.emailField);
        })

        // создаем конфиг, по каким парамертам будем проверять поля
        const config = {
            name: ['isNonEmpty', 'isAlphaNum'],
            email: ['isNonEmpty', 'isCorrectEmail']
        }

        /* добавляем проверку email */
        let emailValidator = {
            isCorrectEmail: {
                re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                validate(value) {
                    return this.re.test(value);
                },
                instructions: 'Такого почтового адреса не существует'
            }
        }

        // создаем экземпляр объекта валидатора
        const validator = new Validator(config, emailValidator);

        // по щелчку мыши собираются данные из полей форм.
        // сообщения об ошибках заносятся в массив validator.messages
        // 
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let data = {
                name: indexForm.nameField.input.value,
                email: indexForm.emailField.input.value
            };

            validator.validate(data);
            indexForm.resetField(indexForm.nameField);
            indexForm.resetField(indexForm.emailField);
            if (validator.hasErrors()) {

                /* если поле логина и поле пароля не верно */
                if (validator.messages.name && validator.messages.email) {

                    indexForm.nameField.popUp.innerHTML = validator.messages.name;
                    indexForm.showError(indexForm.nameField);
                    indexForm.showError(indexForm.emailField);
                    /* костыль */
                    indexForm.emailField.popUp.style.display = 'none';

                } else {
                    /* если поле логина не верно */
                    if (validator.messages.name) {

                        indexForm.nameField.popUp.innerHTML = validator.messages.name;
                        indexForm.showError(indexForm.nameField);
                        indexForm.showCorrect(indexForm.emailField);

                    } else {
                        /* если поле пароля не верно */

                        indexForm.showCorrect(indexForm.nameField);
                        indexForm.emailField.popUp.innerHTML = validator.messages.email;
                        indexForm.showError(indexForm.emailField);

                    }
                }

            } else {

                indexForm.showCorrect(indexForm.nameField);
                indexForm.showCorrect(indexForm.emailField);

                // имитация отправки формы
                setTimeout(() => {
                    indexForm.resetField(indexForm.nameField, true);
                    indexForm.resetField(indexForm.emailField, true);

                    /* очистка texarea */
                    document.querySelector('.feedback-form__textarea').value = '';
                }, 200);

            }
        });
    }
    return {
        init: init
    }
})()

export default worksFormValidation;