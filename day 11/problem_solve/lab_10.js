// Lab 10: Static Methods

class MathUtils {
    static add(a){
        console.log(`this is add method`, a);
    }
    static subtract(a){
        console.log(`this is static subtract method`, a);
    }
}

MathUtils.add(7)