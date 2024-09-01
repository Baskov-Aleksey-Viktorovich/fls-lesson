console.log(useAGE); 

/* 
Змінна, оголошена через var, піднімається (hoisting) на початок своєї області видимості (функції або глобальної), але не ініціалізується, тому її значення — undefined.

Змінна, оголошена через let або const, теж піднімається, але залишається в "темпоральній мертвій зоні" (temporal dead zone, TDZ) до тих пір, поки не буде досягнуто її оголошення в коді. Звернення до неї до оголошення викликає помилку ReferenceError.
var піднімається і ініціалізується як undefined.

let і const піднімаються, але не ініціалізуються до фактичного оголошення.
var піднімається і ініціалізується як undefined. 
let і const піднімаються, але не ініціалізуються до фактичного оголошення. */

let userAge = 26;

let userData = {
    name: 'Oleksii',
    age: 26,
    gender: 'Man',
    favoriteFilm: 'Harry Potter',
    favoriteColor: "Grey",
}

console.log(userAge, userData);

var useAGE = 1;


/* 
Data Type:
 *undefined
 *null
 *number
 *string
 *boolean true / false = '', 0, undefined, NaN
 *object
 *symbol
 **bigint
 typeof - визначення типу данних
*/

/* if / else конструкція */

if(useAGE >= 10){
    console.log('you are old))' , '--if / else конструкція');
}else{
    console.log('you are very young', '--if / else конструкція');
}

// як Отримати нескінченність 
console.log(useAGE / 0, 'Отримання нескінченності');
console.log(useAGE / 'GetNAN', 'Отримання NAN');

console.log(`${useAGE} вивід змінної через використання бектіків - вона ж ІНТЕРПОЛЯЦІЯ`)
// '' , "" , ``,

// Пошук в рядку
let anyText = 'Привіт, Як Справи.';
// method include
console.log(anyText.includes('Як'), 'include');

//parseInt / parseFloat - виборка чисел
let anyNumber = "31.589898980px";

console.log(parseInt(anyNumber), 'parseInt');
console.log(parseFloat(anyNumber), 'parseFloat');

/* Математичні операції 
 * -
 * + 
 * /
 * * (Multiplying)
*/

// Ділення по модулю це в нас %

let a = 19;
let b = 7;

console.log(a % b, 'тут в нас a = 19 / b = 7, як працює Це означає, що 7 вміщується у 19 два рази, з залишком.Беремо тільки цілу частину результату (тобто 2) і множимо її на 7 Далі Віднімаємо 14 від 19 = 5 ВИСНОВОК ОСТАТОК ВІД ДІЛЕННЯ ПО МОДУЛЮ ЦЕ ЯКУ КІЛЬКІСТЬ РАЗІВ ДІЛЬНИК ПОМІСТИТЬСЯ В ДІЛЕНЕ.');


++a; // increment
--b; // decrement

console.log('HOME WORK');

let taskOne = `Задача №1
Яка назва змінної вірна
1) let user-name
2) let UserName
3) let userName`;

console.log(taskOne, 'Правильна відповідь 3');

let taskTwo = `Задача №2
Чи буде помилка при виконанні наступної програми
const userName = 20
userName = "Іштван"
`;

console.log(taskTwo, 'Так буде бо змінюємо константу');

let taskThree = `Задача №3
Що потрапить в консоль?
let numOne = 20
let numTwo = "20"

let numSumm = numOne + numTwo
console.log(numSumm)
`;

console.log(taskThree, '2020 бо один з операндів це строчка. оператор + виконує додавання лиш тоді коли обидва операнда є числом')