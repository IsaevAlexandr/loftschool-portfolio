console.log('my-works page')
import {hamMenu} from './common/hamburgerMenu';
import {toggleClass, smoothScrollTo} from './common/helpers';

hamMenu();

/* scrol down to my-works section */
var downBtn = document.querySelector('.arrow-down ');
downBtn.addEventListener('click',function () {
    smoothScrollTo('my-works', 400);
})
/* scrol up to my-works section */
var upBtn = document.querySelector('.arrow-up__btn');
upBtn.addEventListener('click',function () {
    smoothScrollTo('my-works', 500);
})