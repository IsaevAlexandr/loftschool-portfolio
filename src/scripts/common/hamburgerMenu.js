import { toggleClass } from './helpers';

/* activate hamburger menu and animate it */
let hamMenu = (function() {
    function init() {
        var hamBtn = document.querySelector('.hamburger-bnt');
        var menuItem = [].slice.call(document.querySelectorAll('.ham-menu__item'));

        hamBtn.addEventListener('click', function(e) {
            var timer = 0;

            /* scroll ban then menu is active  */
            if (hamBtn.className === 'hamburger-bnt') {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'initial';
            }

            toggleClass('ham-menu', 'active');
            toggleClass('hamburger-bnt', 'active');

            menuItem.forEach(function(item) {
                /* appearing menu items whith delay */
                if (item.className === 'ham-menu__item') {
                    setTimeout(function() {
                        item.classList.toggle('ham-menu__item_active')
                    }, timer);
                    timer += 150;
                } else {
                    item.classList.toggle('ham-menu__item_active')
                }
            })
        })
    }

    return {
        init: init
    }
})();

export default hamMenu;