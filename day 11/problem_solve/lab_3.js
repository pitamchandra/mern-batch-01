// Lab 3: Object.create()

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