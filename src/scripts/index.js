console.log('index page')
import {toggleClass} from './common/helpers'

var autorizeBtn = document.querySelector('.autorization-btn');
var resumeBtn = document.querySelector('.resume');

/* Listen events for flip index page */
autorizeBtn.addEventListener('click', function() {
    toggleClass('intro__content','active');
});
resumeBtn.addEventListener('click', function() {
    toggleClass('intro__content','active');
});
