const prompt = require('prompt-sync')(); 
let number = (prompt("Введите чилсло "));
if(number%2== 0){
    console.log(`Число явл ${number} четным`);
}else{
    console.log(`Число не явл ${number} четным`);
}