//Отфильтруйте массив чисел, оставив только положительные (filter).
const prompt = require('prompt-sync')();

//создание массива
let arr = [];

// Размер массива
const l = Number(prompt(("Введите длину массива")));

// заполнение массива
for( let  i = 0; i < l; i++){
    let info = Number(prompt(`${i+1}) Введите число `));
    arr.push(info);//добавления в массив значение
}

// Фильтр+ условие
let aF = arr.filter(function (item){
    return item > 0 ;
});

console.log(aF);