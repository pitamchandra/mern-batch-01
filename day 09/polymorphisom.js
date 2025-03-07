class Payment{
    constructor(amount){
        this.amount = amount
    }
    processingPayment(){
        console.log(`Processing a generic payment of $${this.amount}`);
    }
}

class CreditCardPayment extends Payment{
    constructor(amount, cardnumber){
        super(amount)
        this.cardnumber = cardnumber
    }
    processingPayment(){
        console.log(`Processing a Credit Card payment of $${this.amount} using card number ${this.cardNumber.slice(-4)}`);
    }
}

class PaypalPayment extends Payment{
    constructor(amount, email){
        super(amount);
        this.email = email
    }
    processingPayment(){
        console.log(`Processing a Paypal payment of $${this.amount} using email no ${this.email}`);
    }
}

class CriptoPayment extends Payment{
    constructor(amount, walletAddress){
        super(amount)
        this.walletAddress = walletAddress
    }
    processingPayment(){
        console.log(`Processing a Cripto payment of $${this.amount} using wallet address ${this.walletAddress.slice(1, 5)}...`);
    }
}

const payments = [
    new CreditCardPayment(200, "4521-5451-5262"),
    new PaypalPayment(500, "email@gmail.com"),
    new CriptoPayment(300, "alslajfsdlkj")
]

payments.forEach(payment => payment.processingPayment())