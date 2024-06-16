let getBurger = document.querySelector(".menu-icon");
let getMenu   = document.querySelector(".header__body");
let getList   = document.querySelector(".header__menu");


function checkMenuWidth() {
    if(getMenu){
        const menuWidth = getMenu.offsetWidth;
        if(menuWidth >= 1010 && getMenu.classList.contains('active')){
            getMenu.toggle('active');
            getList.toggle('active');
        }
    }
    }



getBurger.addEventListener('click', ()=> {
	getMenu.classList.toggle("active");
    getList.classList.toggle("active");
});
    // Виклик функції при завантаженні сторінки
    window.addEventListener('load', checkMenuWidth);

    // Виклик функції при зміні розміру вікна
    window.addEventListener('resize', checkMenuWidth);