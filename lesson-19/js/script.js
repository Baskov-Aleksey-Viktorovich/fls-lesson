const searchIcon  = document.querySelector(".header__img");
const searchInput = document.querySelector(".header__input");
const upBtn       = document.querySelector('.sub__link');

const getPrices   = document.querySelectorAll(".special-goods__price");

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

  function addColor(){
    let arr = [];
    for(let i = 0; i < getPrices.length; i++){
      arr.push(getPrices[i]);
    }
    return console.log(arr); 
  }

  addColor();

showSearch();