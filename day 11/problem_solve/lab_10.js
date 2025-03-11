// Lab 10: Static Methods
// Instructions:
// Create a class MathUtils with static methods: add() and subtract().
// Call these methods without creating an instance of the class.
// Expected Output:
// 8
// 6

class MathUtils {
    static add(a){
        console.log(`this is add method`, a);
    }
    static subtract(a){
        console.log(`this is static subtract method`, a);
    }
}

MathUtils.add(7)