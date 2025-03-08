function Animal(){
    if(this.constructor === 'Animal'){
        throw new Error('Can not instantiate abstruct class aminal ')
    }
    this.makeSound = function(){
        throw new Error('can not call abstract method makeSound from Animal')
    }
    // console.log(this.constructor);
}

function Dog(name){
    Animal.call(this)
    this.name = name
    this.makeSound = function(){
        console.log(`${this.name} barks`);
    }
}

const animal = new Animal()
// console.log(animal);