// // //Напишите функцию isEven, которая принимает число и возвращает true, если оно чётное, иначе false.
// // const prompt = require('prompt-sync')(); 
// // function isEven(number){
// //     if(number%2== 0){
// //         console.log("Чет");
// //     }else{
// //         console.log(" не Чет");
// //     }
// // }

// // const number =Number(prompt("Введите число"));
// // isEven(number);


// //Создайте функцию maxOfTwo, которая возвращает большее из двух чисел.
// const prompt = require('prompt-sync')(); 
// function  maxOfTwo(number1,number2){
//     if(number1 >number2){
//         console.log(number1);
//     }else{
//         console.log(number2);
//     }
// }


// const number1 =Number(prompt("Введите число"));
// const number2 =Number(prompt("Введите число"));

//  maxOfTwo(number1,number2);

//Напишите стрелочную функцию square, возвращающую квадрат числа. 
const prompt = require('prompt-sync')(); 
const n = Number(prompt("Введите число"));
const square=(n) => console.log(n*n); 
console.log(n);