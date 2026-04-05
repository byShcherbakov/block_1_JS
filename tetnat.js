//С помощью тернарного оператора определите, больше ли число 100.

const prompt = require('prompt-sync')();  

let number = Number(prompt("Введите число "));
let vv =number >100 ?"число больше 100":"число меньше 100";
console.log(vv)