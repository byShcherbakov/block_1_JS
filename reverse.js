//Создайте функцию, которая принимает массив и возвращает его копию, развёрнутую в обратном порядке (без reverse).

const prompt = require('prompt-sync')(); 
// Создание массива
let arr = [];
// Длин для массива 
const length = Number(prompt());

//Заполнение массива
for(let i = 0 ; i <length;i++){
    const info_arr = Number(prompt());
    arr.push(info_arr);
}
//Создание фун по усл
const reverseArray = (arr) => {
  return arr.reduceRight((acc, item) => {
    acc.push(item);
    return acc;
  }, []);
};
// Вызываем функцию и сохраняем результат в переменную
const result = reverseArray(arr); 

// Выводим результат
console.log('Развернутый массив:', ...result);
