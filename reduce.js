//Найдите сумму всех элементов массива с помощью reduce.
const prompt = require('prompt-sync')(); 

// создание массива
let arr = [];

//ввод длин масс 
const l = Number(prompt('Введите дл '));

//Заполн масс 
for(let i = 0 ; i <l ;i++){
    let x = Number(prompt(`${i+1}) Введите знач `));
    arr.push(x);
}

//reduce 
let total = arr.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(`Сумма массива = ${total}`);