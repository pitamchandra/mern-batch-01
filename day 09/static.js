class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static create(name, age) {
        return new User(name, age);
    }
}
const user = new User('Ajay', 30);
console.log(User.create("pitam", 22));
