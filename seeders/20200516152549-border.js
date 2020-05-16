'use strict';
var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Borders', [
      {
        name: faker.commerce.productName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.commerce.productName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.commerce.productName(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Borders', null, {});
  }
};
