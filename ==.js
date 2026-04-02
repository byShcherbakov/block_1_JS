//Создайте конвертер температур: пользователь вводит градусы Цельсия, программа выводит Фаренгейты
const prompt = require('prompt-sync')(); 
let gr =Number(prompt('Введите градусы '));

const end = (gr*9/5)+32 ; 
console.log(end);