const search      = document.querySelector(".search-btn");
const searchBlock = document.querySelector(".search");
const closeBtn    = document.querySelector('.search__close');

function show (){
    search.addEventListener('click', ()=>{
        searchBlock.style.display = 'block';
        searchBlock.style.top = '0';
    })
}

function closeSearchBlock (){
    closeBtn.addEventListener('click', ()=>{
        /* searchBlock.style.display = 'none'; */
        searchBlock.style.top = '-100%';
    })
    console.log('work-close')
};

/* document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  }); */
  



  show();
  closeSearchBlock();
