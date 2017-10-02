console.log('about page')

import {hamMenu} from './common/hamburgerMenu';
import {initMap} from './common/google-map';
import {toggleClass, smoothScrollTo} from './common/helpers';

hamMenu();
initMap();

/* scrol down to about section */
var downBtn = document.querySelector('.arrow-down ');
downBtn.addEventListener('click',function () {
    smoothScrollTo('about', 400);
})