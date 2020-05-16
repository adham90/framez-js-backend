'use strict';
var faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mats', [
      {
        name: faker.commerce.productName(),
        fill_color: faker.commerce.color(),
        border_color: faker.commerce.color(),
        paddings: [1,2,3,4,5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.commerce.productName(),
        fill_color: faker.commerce.color(),
        border_color: faker.commerce.color(),
        paddings: [1,2,3,4,5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.commerce.productName(),
        fill_color: faker.commerce.color(),
        border_color: faker.commerce.color(),
        paddings: [1,2,3,4,5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.commerce.productName(),
        fill_color: faker.commerce.color(),
        border_color: faker.commerce.color(),
        paddings: [1,2,3,4,5],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mats', null, {});
  }
};
