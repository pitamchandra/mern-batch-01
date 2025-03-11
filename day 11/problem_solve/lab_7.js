// Lab 7: Abstraction
// Instructions:
// Create an abstract class Shape with an abstract method calculateArea().
// Create subclasses Circle and Rectangle that implement the calculateArea() method.
// Create an instance of Circle and call the calculateArea() method.
// Expected Output:
// 78.53981633974483

class Shape {
    constructor(){
        if (constructor === Shape){
            throw new error("the shape will not initiate directly")
        }
    }
    calculateArea(){
        throw new error("calculateArea() must call in the child class")
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }
    calculateArea(){
        return this.width * this.height
    }
}


let circle = new Circle(5)
let rectangle = new Rectangle(5, 6)
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());