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