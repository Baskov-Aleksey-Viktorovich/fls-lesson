// task 01

const getBody = document.body;
console.log(getBody, 'show body to console');

// task 02

let getQuntity = +prompt('How match li add?', '1');
let ul = document.createElement('ul');

function addList (getQuntity){
        for(let i = 1; i <= getQuntity; i++){
            let li = document.createElement('li');
            li.classList.add('item')
/*             li.textContent = `li № ${i}`; */
            ul.appendChild(li);
        }
        getBody.appendChild(ul);
        ul.classList.add('ul');
    }

addList(getQuntity);

let makeDiv = document.createElement('div');
makeDiv.textContent = 'This is make div with js';
makeDiv.classList.add('loaded');
getBody.appendChild(makeDiv);

// task 04

const getItem = document.querySelectorAll(".item");  // querySelector, querySelectorAll, getElementsByClassName


for(let i = 0; i < getItem.length; i++){
    getItem[i].classList.add('active');
    getItem[i].textContent = (`element №${i+1}`);
    if(getItem[i].closest('.active')){
        getItem[i].style.fontWeight = 600;
        getItem[i].style.color = 'red';
        getItem[i].style.fontSize = '18px';
    } 
}

if(makeDiv.closest('.loaded')){
    makeDiv.style.color = 'green';
    makeDiv.style.fontSize = '48px';
}


let mainDiv = document.querySelector('.main-div');
let mainHead  = document.querySelector('.mainHead');

console.log(mainDiv, mainHead)

mainHead.prepend(mainDiv);

/* mainHead.insertAdjacentElement("afterbegin", mainDiv); test fot transfer element with js */


/* task 05 */

let getBtn = document.querySelector(".button");
