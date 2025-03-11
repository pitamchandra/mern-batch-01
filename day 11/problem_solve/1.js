// Lab 1: Object Literals
// Instructions:
// Create an object car using an object literal.
// Add properties: brand, model, and year.
// Add a method getDetails() that returns a string with the car's details.
// Call the getDetails() method and log the result.
// Expected Output:
// Toyota Corolla (2020)

let car ={
    brand : "Toyota",
    model : "Corolla",
    year : "2020",
    getDetails : function(){
        console.log(`${this.brand} ${this.model} ${this.year}`);
    }
}

car.getDetails()