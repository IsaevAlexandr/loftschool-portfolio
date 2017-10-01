console.log('blog page')
import {hamMenu} from './common/hamburgerMenu';
import {toggleClass, animatedScrollTo} from './common/helpers';

hamMenu();

var downBtn = document.querySelector('.arrow-down ');
downBtn.addEventListener('click',function () {
    animatedScrollTo('blog', 700);
})
