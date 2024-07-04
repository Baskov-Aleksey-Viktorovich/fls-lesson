const searchIcon  = document.querySelector(".header__img");
const searchInput = document.querySelector(".header__input");
const upBtn       = document.querySelector('.sub__link');

/* showSearch */

/* addColor */
const getPrice   = document.querySelectorAll(".special-goods__price");


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

console.log(getPrice);
function addRed (){
  getPrice.forEach(elem => {
    const oldPrice = elem.querySelector('.old-price');
    const price    = elem.querySelector('.price');
    if(oldPrice){
      price.style.color = 'red';
    }
  })
};


showSearch();
addRed();

