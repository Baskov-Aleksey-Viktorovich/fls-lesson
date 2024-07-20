const searchIcon = document.querySelector(".header__img");
const searchInput = document.querySelector(".header__input");
const upBtn = document.querySelector('.sub__link');
const getBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.body;




const tabsBtn = document.querySelectorAll(".tabs__item"); // btn tab



const tabsItems = document.querySelectorAll(".special-goods__item"); //tab element
/* const tabsAll     = document.querySelectorAll('[role="all"]'); */

/* showSearch */

/* addColor */
const getPrice = document.querySelectorAll(".special-goods__price");


function showSearch() {
  searchIcon.addEventListener('click', () => {
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

function addRed() {
  getPrice.forEach(elem => {
    const oldPrice = elem.querySelector('.old-price');
    const price = elem.querySelector('.price');
    if (oldPrice) {
      price.style.color = 'red';
    }
  })
};

getBurger.addEventListener('click', () => {
  getBurger.classList.toggle('active');
  menu.classList.toggle('show');
  body.classList.toggle('no-scroll');
})



tabsBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let tabActive = item;
    tabsBtn.forEach((item) => {
      item.classList.remove('active');
    })
    tabsBtn.forEach((item) => {
      tabActive.classList.add('active');
    })
  })
});






showSearch();
addRed();

const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 7000,
  },
  watchOverflow: false,
  slidesPerView: 1,
  spaceBetween: '12',
  slidesPerView: 'auto',
  centeredSlides: true,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: '15',
    },
    536: {
      slidesPerView: 2,
      spaceBetween: '24',
      centeredSlides: true,
    },
    802: {
      slidesPerView: 3,
      spaceBetween: '24',
    },
    1074: {
      slidesPerView: 4,
      spaceBetween: '24',
    },
    1142: {
      slidesPerView: 4,
      spaceBetween: '24',
    },
  }

});