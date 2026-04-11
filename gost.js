//Создайте функцию greet, которая принимает имя и выводит приветствие. Если имя не передано, используйте "Гость".
const prompt = require('prompt-sync')();  

//функция 

function h(name){
    const ll = name || "Гость";
    console.log(`${ll}`);

}
const name = String(prompt("Введите имя "));
h(name);
