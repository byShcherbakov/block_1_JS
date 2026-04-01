//Выведите в консоль своё имя и возраст.
const prompt = require('prompt-sync')(); 
let name = String(prompt("Введите имя "));
let age = Number(prompt("Введите возраст "));

console.log(`Вас зовут:${name} \nВаш возраст:${age} `)