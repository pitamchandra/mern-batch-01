// Lab 6: Encapsulation
// Instructions:
// Create a class BankAccount with private properties: _balance and _accountNumber.
// Use getters and setters to control access to these properties.
// Add methods deposit() and withdraw() to modify the balance.
// Create an instance of BankAccount, deposit and withdraw money, and log the balance.
// Expected Output:

// 1500
// 1300

class BankAccount {
    constructor(accountNumber, balance){
        this._balance = balance
        this._accountNumber = accountNumber
        this.displayBalance = function(){
            console.log(`account number is ${this._accountNumber}. your current balance is ${this._balance}`);
        }
    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        console.log(amount);
        if(amount >= 0){
            this._balance = amount;
        }else{
            console.log(`your balance is negative ${amount}`);
        }
    }

    withdraw(amount){
        if(this._balance < 0){
            console.log(`your balance is ${this._balance}`);
        }else{
            this._balance -= amount
            console.log(`you have successfully withdraw ${amount} from account number ${this._accountNumber}`);
        }
    }

    deposit(amount){
        this._balance += amount
        console.log(`you have successfully deposit ${amount}. you current balance is ${this._balance}`);
    }
}

let user1 = new BankAccount(10, 100)
user1.deposit(5)
user1.withdraw(10)
user1.displayBalance()