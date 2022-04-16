const CreditCard = require('./CreditCard')

class CreditCard {
	gene

  generateCreditCard(purseId) {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 2);

    return new CreditCard('3333-666-1111', expirationDate, 111, purseId);
  }
}

module.exports = CreditCard;
