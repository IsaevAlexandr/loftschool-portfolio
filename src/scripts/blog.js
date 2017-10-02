console.log('blog page')
import {hamMenu} from './common/hamburgerMenu';
import {toggleClass, smoothScrollTo} from './common/helpers';

hamMenu();

/* scrol down to blog section */
var downBtn = document.querySelector('.arrow-down ');
downBtn.addEventListener('click',function () {
    smoothScrollTo('blog', 400);
})
