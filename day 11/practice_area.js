class User {
    get name(){
        // console.log(this._name);
        return this._name
    }
    set name(n){
        return this._name = n
    }
}

const user = new User()
user.name = "lala"
console.log(user.name);