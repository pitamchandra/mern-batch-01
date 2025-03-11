// Lab 8: Polymorphism (Method Overriding)

class Animal {
    speak(){
        console.log(`a animal is speak`);
    }
}

class Dog extends Animal{
    speak(){
        console.log(`The Dog Woof`);
    }
}

class Cat extends Animal{
    speak(){
        console.log(`The Cat Meows`);
    }
}

let dog1 = new Dog();
let cat1 = new Cat();
dog1.speak()
cat1.speak()