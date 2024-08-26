const search = document.querySelector(".button-search");
const searchBlock = document.querySelector(".search");
const closeBtn = document.querySelector('.search__close');
const wrapper  = document.querySelector('.wrapper');
const burger   = document.querySelector('.burger');
const getMenu  = document.querySelector(".menu");
const body     = document.body;


function show() {
    search.addEventListener('click', () => {
        searchBlock.classList.toggle('search--show')
        body.classList.toggle('no-scroll');
    })
/*     if(searchBlock.classList.contains("search--show")){
        console.log('wwwww');
        wrapper.addEventListener('scroll',()=>{
            wrapper.scrollTo({top:0});
        })
    } */
}

function closeSearchBlock() {
    closeBtn.addEventListener('click', () => {
        searchBlock.classList.remove('search--show');
        body.classList.toggle('no-scroll');
    })
};

function menuShow(){
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('active');
        getMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    })
}

/* document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  }); */




show();
closeSearchBlock();
menuShow();
