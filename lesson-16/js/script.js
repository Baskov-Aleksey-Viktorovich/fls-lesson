let getBurger = document.querySelector(".menu-icon");
let getMenu   = document.querySelector(".header__burger");

getBurger.addEventListener('click', ()=> {
	getMenu.classList.toggle("active");
});