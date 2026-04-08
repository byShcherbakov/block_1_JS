//Создайте функцию maxOfTwo, которая возвращает большее из двух чисел.
const prompt = require('prompt-sync')(); 

function maxOfTwo(){
    if(x >y){
        console.log(x);
    }else{
        console.log(y);
    }
}

const x = Number(prompt("Введите число"));
const y = Number(prompt("Введите число"));

maxOfTwo(x,y);
