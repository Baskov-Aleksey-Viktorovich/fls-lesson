const searchIcon  = document.querySelector(".header__img");
const searchInput = document.querySelector(".header__input");
const upBtn       = document.querySelector('.sub__link');
const getBurger   = document.querySelector('.burger');

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


getBurger.addEventListener('click', ()=>{
    getBurger.classList.toggle('active');
})


showSearch();
addRed();

