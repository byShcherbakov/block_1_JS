//Напишите программу, которая удаляет из массива все дубликаты (используйте Set или filter).
const prompt = require('prompt-sync')(); 
let arr = [];
const lenght = Number(prompt("Введите длину массива"));

for(let i = 0 ; i <lenght;i++){
    let ff = Number(prompt(`${i+1})Введите значение`))
    arr.push(ff);
}
//1 Set  - убирает дубликаты из массива** ( коллекция )
console.log(...new Set(arr));
      //или 
// const lfl = [...new Set(arr) ]
// console.log(lfl);

//2 filter 
const endFilt = arr.filter((item,index)=>{
    return arr.indexOf(item) == index;
});
console.log(...endFilt);