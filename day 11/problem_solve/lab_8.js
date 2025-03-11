// Lab 8: Polymorphism (Method Overriding)
// Instructions:
// Create a class Animal with a method speak().
// Create subclasses Dog and Cat that override the speak() method.
// Create instances of Dog and Cat and call the speak() method.
// Expected Output:
// The dog barks
// The cat meows

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