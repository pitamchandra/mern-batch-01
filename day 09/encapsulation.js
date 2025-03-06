class BankAccount {
    #balance;
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber
        this.#balance = balance
    }
    diposit(amount){
        this.#balance += amount
        console.log(`$${amount} added in your account`);
    }
    withdraw(amount){
        if(this.#balance >= amount){
            this.#balance -= amount
            console.log(`$${amount} withdraw done. current ballance is $${this.#balance}`);
        }
        else{
            console.log('your has not enough balance');
        }
    }
    getBalance(){
        return console.log(`your balance is $${this.#balance}.`);
    }
}

let pitamAccount = new BankAccount(12, 200)
pitamAccount.withdraw(50)
pitamAccount.getBalance()