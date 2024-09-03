/* LESSON - 22 - Operators */

let res = !1;
let resOr = 2 || "";
console.log(res, '! - Використання оператора !- не');
console.log(resOr);

let dataOne = 5;
let dataTwo = 30;

if(dataOne >= dataTwo){
    console.log(`${dataOne} > ${dataTwo} Виводимо результат першого іфа`)
}else if(dataOne >= 10){
    console.log(`${dataOne} > 10 else if (1)`)
}else{
    console.log(`${dataTwo} > ${dataOne} Виводимо результат else`)
}

let infAboutOperator = 'Послідовність дій,  спочатку виконуються дії порівняння, далі виконуються дії &&, і лиш потім будуть дія ||';
console.log(infAboutOperator, '----Далі теренарка---');

let x = 5;
let y = 10;

console.log(x ** 2 >= y ? 'True' : 'Nooooo', 'Теренарка проста');


let dataObject = {
    name: "Oleksii",
    age: 26,
    favorite: 'red',
    gender: 'man',
};


for(let i = 0; dataObject.name.length > i; i++){
    console.log(dataObject.name[i],i);
}
console.log('Виведено данні в консоль за допомогою циклу');

let newArr = [];

console.log(newArr, 'emptyArr');

newArr.push(10);

console.log(newArr, 'метод push');
let dataName = ['Skoda', "BMW", "Porshe", "Audi"];

for(let i = 0; i < dataName.length; i++){
    newArr.push(dataName[i]);
}

console.log(newArr, 'метод push, за допомогою циклу for');

let randomInteger = [10, 50, 33, 11, 54, 55, 60];
let sortNumber    = [];
for(let number = 0; number < randomInteger.length; number++){
    if(randomInteger[number] > 20){
        sortNumber.push(randomInteger[number]);
    }
}
console.log(randomInteger, 'Массив до сортування');
console.log(sortNumber, 'Відсортований массив за допомогою Циклу for');

console.log(dataName.join(), 'Метод join');

let arrToString = dataName.join();
let reverseString = arrToString.split(',').reverse().join();
console.log(reverseString, 'Розвернутий рядок. Використовуємо split reverse join');

/* FUNCTION */

console.log('FUNCTION');

function plus (first, second){
    let res = first + second;
    console.log('функція яка виконує додавання цих двох чисел', `${first}, ${second}`, "результат:", res);
}

plus(10, 10);
plus(20, 20);
plus(2, 20);


/* Practice */

let getMain = document.querySelector(".main");

let typeText = "Hello World by JS !!!";
let template = ``;

function initText(typeText){
    for(let i = 0; i < typeText.length; i++){
        let item = typeText[i];

        template += `<span style="animation-delay: ${i * 0.2}s;">${item}</span>`;
    }
    getMain.innerHTML = template;
};

initText(typeText);