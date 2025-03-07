function greet(){
    console.log(`Hello, I am ${this.name}`);
}

const person = {name : "pitam"}

greet.call(person)