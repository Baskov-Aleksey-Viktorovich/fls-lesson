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



console.log(dataName.join(), 'Метод join');

let arrToString = dataName.join();
let reverseString = arrToString.split(',').reverse().join();
console.log(reverseString, 'Розвернутий рядок. Використовуємо split reverse join');

/* FUNCTION */

console.log('FUNCTION');
function plus (first = 1, second = 1){
    let res = first + second;
    console.log('функція яка виконує додавання цих двох чисел', `${first}, ${second}`, "результат:", res);
}

plus(10, 10);
plus(20, 20);
plus(2, 20);
plus();


/* Practice */

let getMain = document.querySelector(".main");

let typeText = "Hello World by JS !!!";
let template = ``;

function initText(typeText){
    for(let i = 0; i < typeText.length; i++){
        let item = typeText[i];
        item = item === " " ? "&nbsp;" : item;
        template += `<span style="animation-delay: ${i * 0.2}s;">${item}</span>`;
    }
    getMain.innerHTML = template;
};

initText(typeText);

console.log('HOMEWORK');

console.log(` ЗАВДАННЯ 1: let someVar = 0; ++someVar; if (someVar) { console.log(someVar); } При використанні пре-фіксного інкременту в консолі буде 1`);

let carBrands = [
    "Toyota",
    "Honda",
    "Ford",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Nissan",
    "Hyundai",
    "Chevrolet"
  ];

  for(let i = 0; i < carBrands.length; i++){
    console.log(`ЗАВДАННЯ 2: ${carBrands[i]}, рядок №${i}`);
  }

  console.log(`Задача 3
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}
Як на мене нічого не виведе`)



function division (first, second){
    if(first > 0 && second > 0){
        let res = first / second;
        console.log("Задача 4");
        console.log('функція яка виконує діляння двох чисел', `${first}, ${second}`, "Результат ділення:", res);
    }else if(second === undefined || first === undefined){
        console.log("Задача 4");
        console.log(`'перевіряємо правельність введення дорогенький' ${"пусто"}, ${"пусто"}`);
    }else{
        console.log("Задача 4");
        console.log(`'перевіряємо правельність введення дорогенький' ${first}, ${second}`);
    }
}

division(10, 2);
division(20, 3);
division(0, 0);
division();

console.log("Завдання 5");
let randomInteger = [10, 50, 33, 11, 54, 55, 60];
let sortNumber    = [];
for(let number = 0; number < randomInteger.length; number++){
    if(randomInteger[number] >= 20){
        sortNumber.push(randomInteger[number]);
    }else if(randomInteger[number] === 10){
        console.log('Ми дістали нашу ДЕСЯТКУ');
    }
}
console.log(randomInteger, 'Массив до сортування');
console.log(sortNumber, 'Відсортований массив за допомогою Циклу for');

/* Задача №1
Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}

Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.



Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 

Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль */
