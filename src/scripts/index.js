import {message} from './common/some'

console.log(message);


let humbBtn = document.querySelector('.hamburger__icon');
if (humbBtn) {
    let closeBtn = document.querySelector('.close-btn');
    let fixedMenu = document.querySelector('.fixed-menu');
    humbBtn.addEventListener('click',function () {
        fixedMenu.classList.toggle("fixed-menu_show")
        humbBtn.style.visibility = 'hidden';
    })  
    closeBtn.addEventListener('click',function () {
        fixedMenu.classList.toggle("fixed-menu_show")
        humbBtn.style.visibility = 'visible';
    }) 
}