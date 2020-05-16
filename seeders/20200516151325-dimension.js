'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dimensions', [
      {
        width: 100,
        height: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        width: 200,
        height: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        width: 300,
        height: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        width: 400,
        height: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dimensions', null, {});
  }
};
