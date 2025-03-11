// Lab 3: Object.create()
// Instructions:
// Create an object person with properties: name and age, and a method introduce().
// Use Object.create() to create a new object student that inherits from person.
// Add a new property grade to the student object.
// Call the introduce() method and log the grade.
// Expected Output:
// .
// Hi, I'm Alice, 25 years old
// A


let person = {
    name : "Alice",
    age : 21,
    introduce : function(){
        console.log(`I am ${this.name}, ${this.age} years old `);
    }
}

let student = Object.create(person)
student.grade = "A+"
student.introduce()
console.log(student.grade);