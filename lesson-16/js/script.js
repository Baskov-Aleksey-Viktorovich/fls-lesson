let getBurger = document.querySelector(".menu-icon");
let getMenu   = document.querySelector(".header__burger");
let getSearchBtn = document.querySelector(".body-header__action-search");
let getSearch    = document.querySelector(".search-body-header");


getBurger.addEventListener('click', ()=> {
	getMenu.classList.toggle("active");
});

getSearchBtn.addEventListener('click', ()=> {
	getSearch.classList.toggle("open")
})