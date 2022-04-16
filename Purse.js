const Money = require('./src/Money');
const CreditCard = require('./src/CreditCard');
const BusinessCard = require('./src/BusinessCard');

class Purse {
  main() {
    new Money();
    new BusinessCard();
    new CreditCard();

    console.log('Halt!')
  }
}

new Purse().main();