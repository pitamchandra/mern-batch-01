// Lab 2: Object Constructor

function person(name, age, job){
    this.name = name
    this.age = age
    this.job = job
    this.introduce = function(){
        return `Hi, I am ${this.name}. a ${this.age} years old ${this.job}`
    }
}

let person1 = new person("Jhon", 20, "Developer")

console.log(person1.introduce());