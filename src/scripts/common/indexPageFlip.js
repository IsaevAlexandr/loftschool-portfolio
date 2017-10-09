import { toggleClass } from './helpers'


let IndexPageFlip = (function() {
    function init() {
        let autorizeBtn = document.querySelector('.autorization-btn');
        let resumeBtn = document.querySelector('.resume');

        /* Listen events for flip index page */
        autorizeBtn.addEventListener('click', function() {
            toggleClass('intro__content', 'active');
            autorizeBtn.style.visibility = 'hidden';
        });
        resumeBtn.addEventListener('click', function() {
            toggleClass('intro__content', 'active');
            autorizeBtn.style.visibility = 'visible';
        });
    }

    return {
        init: init
    }
})()

export default IndexPageFlip;