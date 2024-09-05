/* LESSON - 23 - Functions */

/* window */

// how to get with object window

const windowWidth = window.innerWidth;
console.log(windowWidth, 'це ширина екрану за домогою window.innerWidth');

/* BOM */
//Navigator can support get information about user system and another information
console.log(navigator.userAgent, 'Який використовується браузер');
console.log(navigator.userAgentData.platform, '- System (Platform)');


/* Location */
// Адресний рядок браузера

console.log(location , 'Тут ми дістаємо location')
console.log(location.href , 'Тут ми дістаємо location.href')


/* Practice */
let getBtn      = document.querySelector(".showDialog");
let getDialog   = document.querySelector('.dialog');
let getCloseBtn = document.querySelector('.dialog__close');


function openModal (){
    getBtn.addEventListener("click", ()=>{
        getDialog.showModal();
    })
};

function closeModal (){
    getCloseBtn.addEventListener("click", () => {
        getDialog.close();
    })
}

openModal ();
closeModal ();

/* Practice with hash */
const cleanHash = location.hash.replace("#", "");
console.log(cleanHash, 'clean hash');
console.log(location.hash , 'Тут ми дістаємо location.hash')


/* DOM - Document Object Model */

const bodyElement      = document.body;
const firstBodyElement = bodyElement.firstElementChild;
const lastBodyElement  = bodyElement.lastElementChild;
console.log(bodyElement, firstBodyElement, lastBodyElement, 'Дістав з дом увесь боді та перший елемент боді а також останній елемент');

let getCollection = bodyElement.children;
console.log(getCollection);

/* Навігація до батьківських або сусідніх елементів */

let prevElement = bodyElement.previousElementSibling;
console.log(prevElement)

const liElement = document.querySelectorAll("li.list__item.active");

for (let item of liElement){
    if(item != null){
        item.style.color = "red";
        item.style.fontSize  =  "25px";
        console.log(item, "виводимо item елементи які мають класс active  li.list__item.active ")
    }
}

/* Отримання батькіського елементу)) */


