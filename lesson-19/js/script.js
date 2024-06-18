const searchIcon  = document.querySelector(".header__img");
const searchInput = document.querySelector(".header__input");

function showSearch (){
    searchIcon.addEventListener('click', ()=>{
        searchInput.classList.toggle('show');
    })
}

showSearch();