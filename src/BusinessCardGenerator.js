const BusinessCard = require('./BusinessCard')

class BusinessCardGenerator {
  generateBusinessCard(purseId) {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 2);

    return new BusinessCard('1111-222-3333', expirationDate, 111, purseId);
  }
}

module.exports = BusinessCardGenerator;