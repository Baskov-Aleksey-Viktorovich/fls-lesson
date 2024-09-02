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
}


for(let i = 0; dataObject.name.length > i; i++){
    console.log(dataObject.name[i],i);
}
console.log('Виведено данні в консоль за допомогою циклу')