//Напишите стрелочную функцию square, возвращающую квадрат числа.
const prompt = require('prompt-sync')();  

const ll = Number(prompt('Введите число '));

const square =ll => console.log(ll*ll); ;
square(ll);