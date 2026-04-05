const prompt = require('prompt-sync')();  
 
let x = Number(prompt("Введите значение"));
let y = Number(prompt("Введите значение"));
let nn = String(prompt("Введите дейст."));

switch(nn){
    case '+':
        let = x+y;
        console.log(let);
        break;
    case '-':
        let = x-y;
        console.log(let);
        break;
    case '*':
        let = x*y;
        console.log(let);
        break;
    case '/':
        let = x/y;
        console.log(let);
        break;
     default:
        console.log("Неверный пункт меню");


}