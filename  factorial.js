
const prompt = require('prompt-sync')();  

function ff (number){
    let fact = 1;
    for(let i = 1;i<=number;i++){
        fact *=i;
    }
    console.log(fact);
}

let number = Number(prompt('Введите число'));
ff(number);