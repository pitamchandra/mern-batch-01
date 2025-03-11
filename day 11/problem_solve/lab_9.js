// Lab 9: Polymorphism (Method Overloading)

// class Calculator {
//     add(a, b, ...rest){
//         let sum = a + b;
//         // console.log(rest);
//         for(let num of rest){
//             sum += num;
//         }
//         console.log(sum);
//     }
// }

// let calculate = new Calculator()
// calculate.add(1,3,1, 1)

// Lab 9: Polymorphism (Method Overloading)
// Instructions:
// Create a class Calculator with a method add() that can handle different numbers of arguments.
// Call the add() method with 2 and 3 arguments.
// // Expected Output:
// 5
// 9


class Calculator{
    add(a, b){
        console.log(a , b);
    }
    add(a, b, c=0){
        console.log(a + b + c);
    }
}

let calculate = new Calculator()

calculate.add(1 , 2)
calculate.add(1 , 2, 9)