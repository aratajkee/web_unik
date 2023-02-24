function checkIfLucky(ticketNumber) {
    if (ticketNumber.length !== 6) {
        console.log("Wrong number length!");
        return false;
    }
    let count = 0;
    for (let i = 0; i < ticketNumber.length; i++) {
        if (i % 2 == 1) {
            count -= ticketNumber[i];
        } else {
            count += ticketNumber[i];
        }
    }
    if (count == 0) {
        console.log(ticketNumber + " is lucky number :)");
        return true;
    } else {
        console.log(ticketNumber + " is not lucky number :(");
        return false;
    }
}


const button = document.querySelector('.button_exec');
//const text = document.querySelector('.text_area')
const text = document.getElementById("text_area");
const ticket = document.getElementById("input").value;
button.addEventListener('click',() =>{
    let res = checkIfLucky(document.getElementById("input").value);
    text.value = res;
})

// while (true){
//
//     const prompt = require('prompt-sync')();
//     const ticket = prompt("Enter ticket number: ");
//
//     let res =  checkIfLucky(ticket)
//     console.log(res)
//
// }