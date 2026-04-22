//Задание 1 
/*Создайте массив из 5 имён. Выведите каждое имя с помощью цикла. */

const prompt = require('prompt-sync')(); 

//создание массива 
// let arr =[];

// for(let i = 0 ; i <5 ; i++){
//     let name = String(prompt("Введите имя"));
//     arr.push(name);
// }

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

/*Напишите функцию, которая принимает массив чисел и возвращает новый массив с квадратами этих чисел (используйте map). */

//пустой массив
let arr = [];

// Длина массива
const leg = Number(prompt("Введите длину массива "));

//заполнение массива
for(let n= 0; n <leg;n++ ){
    let st = Number(prompt(`${n+1}) Введите значение `));
    arr.push(st);
}

function getSquares(array) {
    return array.map(num => num * num);
}

console.log("Массив квадратов:", getSquares(arr));
