class Car {
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }

    startEngine(){
        console.log(`${this.brand} ${this.model} is starting`);
        this.#fuelEnject(); // Abstract Example
    }

    #fuelEnject(){
        console.log(`fuel is injecting......`);
    }
}

const car = new Car('tesla', 'b4');
car.startEngine();