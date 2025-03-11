// ES6 Classes

class Animal {
    constructor(name, sound){
        this.name = name,
        this.sound = sound,
        this.makeSound = function(){
            console.log(`${this.name} says ${this.sound}`);
        }
    }
}

let animalOne = new Animal("dog", "woof")
animalOne.makeSound()