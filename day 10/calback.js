// function add(num1, num2){
//     return num1 + num2
// }
// function sub(num1, num2){
//     return num1 - num2
// }
// function multiplication(num1, num2){
//     return num1 * num2
// }

// function calculate(num1, num2, callback){
//     console.log(callback(num1, num2));
// }

// calculate(12, 12, sub)

let numbers = [1,34,4,5,7,23]

function mainFunction(callback, callback2){
    // let total = 0;
    console.log("processing the operation....");
    numbers.forEach(callback)
    callback2()
    // console.log(total);
}

function displayNumber(number){
    console.log(`Result: ${number}`);
}

// function total(num){
//     total += num;
//     console.log(num + num);
// }

function message(){
    console.log("thank you so much");
}
mainFunction(displayNumber, message)
// mainFunction(total, message)
