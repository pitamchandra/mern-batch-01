// Inheritance

class Vehicle {
    name = "Corolla"
    maker = "Toyota"
    engine = "1.8L"
    getDetails(){
        console.log(`${this.name} by ${this.maker} (${this.engine}) `);
    }
}

class Car extends Vehicle {
    numDoors = 4
    getDetails(){
        console.log(`${this.name} by ${this.maker} (${this.engine}) ${this.numDoors} doors`);
    }
}

let car1 = new Car()
car1.getDetails()