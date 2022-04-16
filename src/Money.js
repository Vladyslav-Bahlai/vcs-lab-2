class Money {
  balance;
  currency;
  constructor(balance, currency) {
    console.log('new Money!')
    this.balance = balance;
    this.currency = currency;
  }

  showBalance(){
    console.log('Your balance: ' + this.balance + this.currency);
  }

  addBalance(amount){
    this.balance = this.balance + amount;
  }

  substract(amount){
    this.balance = this.balance - amount;
  }
}

module.exports = Money;