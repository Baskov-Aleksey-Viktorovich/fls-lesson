// task 01

const getBody = document.body;
console.log(getBody, 'show body to console');

// task 02

let getQuntity = +prompt('How match li add?', '1');
let ul = document.createElement('ul');

function addList (getQuntity){
        for(let i = 1; i <= getQuntity; i++){
            let li = document.createElement('li');
            li.textContent = `li № ${i}`;
            ul.appendChild(li);
        }
        getBody.appendChild(ul);
    }

addList(getQuntity);

let makeDiv = document.createElement('div');
makeDiv.textContent = 'This is make div with js';
makeDiv.classList.add('loaded');
getBody.appendChild(makeDiv);

if(makeDiv.closest('.loaded')){
    makeDiv.style.color = 'green';
}

/* if(){
    makeDiv.style.color = 'green';
} */