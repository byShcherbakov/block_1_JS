// // //Выведите все числа от 1 до 100, кратные 3 и 5 одновременно.
// const prompt = require('prompt-sync')(); 
// // for(let i =0;i <101;i++){
// //     if((i%3==0)&&(i%5==0)){
// //         console.log(i);
// //     }
// // }

// // //Посчитайте сумму чисел от 1 до введённого пользователем числа.
// // let start = 0;
// // let number = Number(prompt("Введите число"));
// // for(let i = 1;i <= number ;i++){
// //     start+=i ;
    
// // }
// // console.log(`Сумма: ${start}`);

// // //Напишите цикл, который выводит звёздочки в виде треугольника:

// // for(let i = 0;i <=number ; i++){
// //     let line ='';
// //     for(let j = 1;j <=i ;j++){
// //         line+="*";
// //     }
// //     console.log(line);
// // }
// // let rows = 5;

// //
// const prompt1 = require('prompt-sync')(); 
// let info = true;
// let sum = 0;


// do{
//     let input = Number(prompt("Введите число "));
//     if(input == 0){
//         console.log(sum);
//         info = false;
//     }else{
//         sum +=input;
//     }

// }while(info);

//Выведите таблицу умножения от 1 до 10 (используйте вложенные циклы).

for(let st1 = 1 ; st1 <=10;st1++){
    for(let sec2 = 1 ;sec2 <=10;sec2++ ){
        let end = st1*sec2;
        console.log(`${st1}*${sec2} = ${end}`);
    }

}

//Найдите первое число в интервале от 100 до 200, которое делится на 17, и выведите его, прервав цикл.
let ll = 200;
for(let i = 100 ; i <=ll ;i++){
    if(i%17==0){
        console.log(i);
        break;
    }
}