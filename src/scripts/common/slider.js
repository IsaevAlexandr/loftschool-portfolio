let slider = (function() {
    function init() {
        let mainSlide = [].slice.call(document.querySelectorAll('.photos-sl__item'));
        let worksNumber = mainSlide.length;

        /* Statement to all sliders. Main prop.  */
        let currentPos = 1;

        /* Description text slider */
        let descSlider = {
            title: document.querySelector('.description-sl__title'),
            skills: document.querySelector('.description-sl__skills'),
            params: [
                { id: 1, title: 'Сайт школы онлайн образования', skills: 'HTML , CSS, JAVASCRIPT' },
                { id: 2, title: 'Второй проект', skills: 'HTML , CSS, JAVASCRIPT' },
                { id: 3, title: 'Третий проект', skills: 'HTML , CSS, JAVASCRIPT' },
                { id: 4, title: 'Четвертый проект', skills: 'HTML , CSS, JAVASCRIPT' }
            ]
        }

        /* Button slider (previous work) */
        let prevBtnSlider = {
                elem: document.querySelector('.nav-btns__sl-btn_fill_prev').children[0],
                inc: -1,
                pos: changePos
            }
            /* Button slider (next work) */
        let nextBtnSlider = {
            elem: document.querySelector('.nav-btns__sl-btn_fill_next').children[0],
            inc: 1,
            pos: changePos
        }

        /* Need to correct displaing already loading document */
        reDrow();

        /* On click chenging currentPos and redrow all sliders  */
        prevBtnSlider.elem.parentNode.addEventListener('click', function() {
            currentPos = changePos(prevBtnSlider.inc);
            reDrow();
        })
        nextBtnSlider.elem.parentNode.addEventListener('click', function() {
            currentPos = changePos(nextBtnSlider.inc);
            reDrow();
        })

        /**
         * Chenge inner property of current slider position 
         * @param {*Number} inc 
         */
        function changePos(inc) {
            if (inc > 0) {
                return currentPos + inc > worksNumber ? 1 : currentPos + inc;
            } else {
                return currentPos + inc > 0 ? currentPos + inc : worksNumber;
            }
        }

        /**
         * Redrow slider section (all sliders). Depends of @currentPos global slider.
         */
        function reDrow() {
            /* calculating inner work numder to display */
            prevBtnSlider.elem.style.transform = 'translateY(-' + ((prevBtnSlider.pos(prevBtnSlider.inc)) - 1) + '00%)';
            nextBtnSlider.elem.style.transform = 'translateY(-' + ((nextBtnSlider.pos(nextBtnSlider.inc)) - 1) + '00%)';

            /* remove from all and add focuse class for current work  */
            mainSlide.forEach(function(element) {
                element.classList.remove('focus');
            });
            mainSlide[currentPos - 1].classList.add('focus');

            /* chenging fields value of descSlider and run smooth text appearance function  */
            descSlider.title.innerHTML = descSlider.params[currentPos - 1].title;
            descSlider.skills.innerHTML = descSlider.params[currentPos - 1].skills;
            smoothTextAppearance(descSlider.title);
            smoothTextAppearance(descSlider.skills);
        }

        /**
         * Sooth text appearance.
         * @param {*html element} elem 
         * @param {*Number} time for letter appearende. Default 60 ms
         */
        function smoothTextAppearance(elem, time = 30) {
            let elemInner = elem.innerHTML;
            let elemTimeoutcount = elemInner.length;
            elem.innerHTML = elem.innerHTML.replace(/./g, '<span class="hide-letter">$&</span>');

            // elem.innerHTML = elem.innerHTML.split('').map( el => `<span class="hide-letter">${el}</span>` ).join('');

            [].slice.call(elem.children).forEach((el, i) => {
                setTimeout(function() {
                    el.classList.add('show-letter')
                }, time * i);
            });

            /* приводим элемент в первоначальны вид. Появляется баг: если часто нажимать на кнопку текст дергается. Зато сохраняется принцип целостности*/
            setTimeout(() => {
                elem.innerHTML = elemInner;
            }, time * elemTimeoutcount)
        }
    }
    return {
        init: init
    }
})()

export default slider;