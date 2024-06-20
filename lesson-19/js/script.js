const searchIcon  = document.querySelector(".header__img");
const searchInput = document.querySelector(".header__input");
const upBtn       = document.querySelector('.sub__link')

function showSearch (){
    searchIcon.addEventListener('click', ()=>{
        searchInput.classList.toggle('show');
    })
}

upBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

showSearch();