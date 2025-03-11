// Lab 1: Object Literals

let car ={
    brand : "Toyota",
    model : "Corolla",
    year : "2020",
    getDetails : function(){
        console.log(`${this.brand} ${this.model} ${this.year}`);
    }
}

car.getDetails()