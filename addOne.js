//Напишите функцию counter, которая при каждом вызове возвращает увеличенное на 1 значение (используйте замыкание).
const prompt = require('prompt-sync')(); 

function createCounter(){
    let count = 0;//счетчик

    //вызов замкнутый 
    return function(){
        count++;
        return count;
    };

}
//чтобы счетчик не обнулялся каждый раз
const counter = createCounter();


console.log(counter());
console.log(counter());
console.log(counter());


