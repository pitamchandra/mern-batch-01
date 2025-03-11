// Lab 5: Inheritance
// Instructions:
// Create a class Vehicle with properties: name, maker, and engine.
// Create a subclass Car that inherits from Vehicle and adds a property numDoors.
// Override the getDetails() method to include the number of doors.
// Create an instance of Car and call the getDetails() method.
// Expected Output:
// Corolla by Toyota (1.8L) with 4 doors
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