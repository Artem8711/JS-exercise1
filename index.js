/* практичиское задание 1 */

/* Первая часть */

//1
const a = 2;
const b = 3;
const multiply = a * b;
console.log(`множення`, multiply);

//2
const c = 10;
const d = 2;
const divide = c / d;
console.log(`ділення`, divide);

//3
const e = 5;
const f = 2;
const sum = e + f;
console.log(`додавання`, sum);

//4
let num1 = 11;
let bool = true;
let str1 = 'java script';
let str2 = '100';
console.log(num1, bool, str1, str2);

//5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;
console.log(num);

/* Вторая часть */

//1
let number = prompt('Введи число:');
alert('Квадрат: ' + number * number);

//2
let n1 = +prompt('Перше число:');
let n2 = +prompt('Друге число:');
alert('Середнє: ' + (n1 + n2) / 2);

//3
let minutes = prompt('Скільки хвилин?');
alert('Секунд: ' + minutes * 60);

//4
let greeting = 'Hello, ';
let userName = prompt('Як тебе звати?');
let message = greeting + userName + '!';
console.log(message);
document.write(`<p>${message}</p>`);

//5
let name = prompt('Ім’я:') || 'Artem';
let surname = prompt('Прізвище:') || 'S';
let email = prompt('Email:') || 'goglil2063@gmail.com';
let phone = prompt('Телефон:') || '+380636363633';
let age = prompt('Вік:') || '18';
let img =
   prompt('URL до зображення:') ||
   document.write(`
  <div style=" padding: 1rem; border: 1px solid #ccc; width: 300px;">
    <img src="${'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}"  style="width: 100px; border-radius: 50%;" />
    <p><strong>Ім’я:</strong> ${name}</p>
    <p><strong>Прізвище:</strong> ${surname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
    <p><strong>Вік:</strong> ${age}</p>
  </div>
`);
