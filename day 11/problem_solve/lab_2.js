// Lab 2: Object Constructor
// Instructions:
// Create a constructor function Person with properties: name, age, and job.
// Add a method introduce() that returns a string introducing the person.
// Create an instance of Person and call the introduce() method.
// Expected Output:
// Hi, I'm John, a 30-year-old Developer.

function person(name, age, job){
    this.name = name
    this.age = age
    this.job = job
    this.introduce = function(){
        return `Hi, I am ${this.name}. a ${this.age} years old ${this.job}`
    }
}

let person1 = new person("John", 20, "Developer")

console.log(person1.introduce());