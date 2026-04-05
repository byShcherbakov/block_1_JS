const prompt = require('prompt-sync')();  
let win = true
let numberR =Math.floor(Math.random()*10)+1;


while(win){
    const number =Number(prompt('Введите число '));
    if(number === numberR){
        console.log(`Угадал число - это было ${numberR}`);
        win = false;
    }else{
        let mm = number<numberR?"Меньше загад* число":"Больше чем загад* число";
        console.log(mm);
    }
}