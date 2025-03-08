function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

Person.prototype.calculateAge = function () {
    console.log('The current age is: ' + (2019 - this.yearOfBirth));
}

console.log(Person.prototype);