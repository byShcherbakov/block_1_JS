const prompt = require('prompt-sync')();

let year = Number(prompt("Введите год"));
if((year% 4=== 0 && year%100!=0)|| (year%400==0)){
    console.log("leap year");
}else {
    console.log("NO leap year");
}