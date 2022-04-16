const Money = require('./src/Money');
const CreditCard = require('./src/CreditCard');
const BusinessCardGenerator = require('./src/BusinessCardGenerator');

class Purse {
  main() {
    const money = new Money();
    const businessCard = new BusinessCardGenerator().generateBusinessCard();
    const creditCard = new CreditCard();

    console.log('Halt!')
  }
}

new Purse().main();