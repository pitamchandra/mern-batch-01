// Lab 4: ES6 Classes
// Instructions:
// Create a class Animal with properties: name and sound.
// Add a method makeSound() that logs the sound of the animal.
// Create an instance of Animal and call the makeSound() method.
// Expected Output:
// Dog says Woof


class Animal {
    constructor(name, sound){
        this.name = name,
        this.sound = sound
    }
    makeSound = function(){
        console.log(`${this.name} says ${this.sound}`);
    }
}

let animalOne = new Animal("dog", "woof")
animalOne.makeSound()