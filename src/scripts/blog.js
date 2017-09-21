let blogMenu = document.querySelector('.blog__sidebar');
if (blogMenu) {
    blogMenu.addEventListener('click',function () {
        blogMenu.classList.toggle("blog__sidebar_active")
    })    
}

