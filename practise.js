// let firstValue = 4;
// let secondValue = 5;
//
// //summa kvadratov 1 and 2
// let res = Math.pow(firstValue, 2) + Math.pow(secondValue, 2);
// //console.log("result: " + res);
//
// let str1 = 'Hello world'
// let str2 = 'Web programming'
//
// str1 =  str1.substring(0,6).concat(str2.substring(4))
//
// console.log(str1)

//6 task
let count = 3;
while (true) {
    const prompt = require('prompt-sync')();
    const day = prompt("enter day: ");
    if (day == 1) {
        console.log(day + " - Понедельник")
    } else if (day == 2) {
        console.log(day + " - Вторник")
    } else if (day == 3) {
        console.log(day + " - Среда")
    } else if (day == 4) {
        console.log(day + " - Четверг")
    } else if (day == 5) {
        console.log(day + " - Пятница")
    } else if (day == 6) {
        console.log(day + " - Суббота")
    } else if (day == 7) {
        console.log(day + " - Воскресенье")
    } else {
        console.log(day + " - Нет такого дня недели!")
    }
}

