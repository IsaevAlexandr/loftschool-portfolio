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



var currentPos = 1;
var mainSlide = [].slice.call(document.querySelectorAll('.photos-sl__item'));  
var worksNumber = mainSlide.length;

var prevBtnSlider = {
    elem: document.querySelector('.nav-btns__sl-btn_fill_prev').children[0],
    inc: -1,
    pos: changePos
}
var nextBtnSlider = {
    elem: document.querySelector('.nav-btns__sl-btn_fill_next').children[0],
    inc: 1,
    pos: changePos
}


prevBtnSlider.elem.parentNode.addEventListener('click', function () {
    currentPos = changePos(prevBtnSlider.inc);
    reDrow();
})
nextBtnSlider.elem.parentNode.addEventListener('click', function () {
    currentPos = changePos(nextBtnSlider.inc);
    reDrow();
})
function changePos(inc) {
    if (inc > 0) {
        return currentPos + inc > worksNumber ? 1 : currentPos + inc;
    }else{
        return currentPos + inc > 0 ? currentPos + inc : worksNumber;
    }
}
function reDrow() {
    prevBtnSlider.elem.style.transform = 'translateY(-'+ ((prevBtnSlider.pos(prevBtnSlider.inc))-1) + '00%)';
    nextBtnSlider.elem.style.transform = 'translateY(-'+ ((nextBtnSlider.pos(nextBtnSlider.inc))-1) + '00%)';
    mainSlide.forEach(function(element) {
        element.classList.remove('focus');
    });
    mainSlide[currentPos - 1].classList.add('focus')
}
reDrow();

var prevBtnNumb = document.querySelector('.nav-btns__sl-btn_fill_prev').children[0];
var transitionStep = 100;
var startPoint = 0;