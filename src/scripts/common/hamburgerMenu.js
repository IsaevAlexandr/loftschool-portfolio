function hamMenu(){
    var hamBtn = document.querySelector('.hamburger-bnt');
    var hamMenu = document.querySelector('.ham-menu');
    var menuItem = document.querySelectorAll('.ham-menu__item');
    
    hamBtn.addEventListener('click',function (e) {
        var timer = 200;

        /* запрет скрола при активном меню */
        if (hamBtn.className === 'hamburger-bnt'){
            document.body.style.overflow = 'hidden';
        }else {
            document.body.style.overflow = 'initial';
        }

        hamBtn.classList.toggle('hamburger-bnt_active')
        hamMenu.classList.toggle('ham-menu_active')
        menuItem.forEach(function(item) {
            /* появление элементов меню с задержкой */
            if(item.className === 'ham-menu__item'){
                setTimeout(function(){
                    item.classList.toggle('ham-menu__item_active')
                },timer); 
                timer += 200;
            }else{
                item.classList.toggle('ham-menu__item_active')
            }
        })
    })
}
export {hamMenu};