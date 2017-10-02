console.log('blog page')
import {hamMenu} from './common/hamburgerMenu';
import {toggleClass, smoothScrollTo} from './common/helpers';

hamMenu();

/* scrol down to blog section */
var downBtn = document.querySelector('.arrow-down ');
downBtn.addEventListener('click',function () {
    smoothScrollTo('blog', 400);
})


/* Spagetti blog section code. I apologize, but i have no much time to remodel my layout  */

/* getting links and articles arrays */
var blogLinks = [].slice.call(document.querySelectorAll('.blog-menu__link'));
var postItems = [].slice.call(document.querySelectorAll('.post__item'));

/* for every link we: 
1) prevent default action;
2) find equal link and post data-article atributes and scroll to that article;
3) then remov active class frov previus blog item and add to current;
 */
blogLinks.forEach(function(element) {
    element.addEventListener('click',function (e) {
        e.preventDefault();
        var targetBlogArtikle = postItems.find(function (el) {
            return el.dataset.article === element.dataset.article;
        })
        smoothScrollTo(targetBlogArtikle, 300);

        /* Removing active class from all menu item elements. After add active class to click target element */
        [].slice.call(document.querySelectorAll('.blog-menu__item')).forEach(function (el) {
            el.classList.remove('blog-menu__item_active');
        })
        e.target.parentNode.classList.add('blog-menu__item_active')
        console.log(window.innerWidth);
        
    });
});



var blogMenu = document.querySelector('.blog-menu');
var endPoint = blogMenu.getBoundingClientRect().top + window.pageYOffset;

/* doesnt work if i'll try to substitute this value in if statament */
var startPoint = window.pageYOffset;

/* on scroll event checking window.pageYOffset position and fix menu block, when it value near 0 */
document.addEventListener('scroll',function () {
    if (endPoint - window.pageYOffset <= 50) {
        blogMenu.style.position = 'fixed';
        blogMenu.style.top = '50px';
        if (window.innerWidth > 768) {
            blogMenu.style.width = '33%';
        }
    }else {
        
        blogMenu.style.position = 'initial';
        blogMenu.style.width = 'initial';
    }
})

/* moving slide menu on click on tablets and mobile phones*/
blogMenu.addEventListener('click',function () {
    toggleClass('blog-menu','active'); 
})
