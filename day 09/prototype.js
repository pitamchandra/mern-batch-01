function Person (name, yearOfBirth) {
    this.name = name
    this.yearOfBirth = yearOfBirth
}

Person.prototype.calculateAge = function(){
    console.log(`${this.name} current age is: ${new Date().getFullYear() - this.yearOfBirth}`);
}

const person = new Person("pitam", 2001)
person.calculateAge()