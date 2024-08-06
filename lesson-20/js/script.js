const search = document.querySelector(".search-btn");
const searchBlock = document.querySelector(".search");
const closeBtn = document.querySelector('.search__close');
const wrapper  = document.querySelector('.wrapper');

function show() {
    search.addEventListener('click', () => {
        searchBlock.classList.toggle('search--show')
    })
    if(searchBlock.classList.contains("search--show")){
        console.log('wwwww');
        wrapper.addEventListener('scroll',()=>{
            wrapper.scrollTo({top:0});
        })
    }
}

function closeSearchBlock() {
    closeBtn.addEventListener('click', () => {
        searchBlock.classList.remove('search--show');
    })
};

/* document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  }); */




show();
closeSearchBlock();
