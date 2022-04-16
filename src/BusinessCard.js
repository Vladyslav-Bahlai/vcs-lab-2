
class BusinessCard {
  constructor(cardNumber, expirationDate, securityNumber, purseId) {
    this.purseId = purseId;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.securityNumber = securityNumber;
  }

  isExpired(date) {
    return date > this.expirationDate;
  }
}

module.exports = BusinessCard;