'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dimensionals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      klassType: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: 'klass_inex'
      },
      klassId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: 'klass_inex'
      },
      dimensionId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      priceCents: {
        allowNull: false,
        default: 0,
        type: Sequelize.INTEGER
      },
      priceCurrency: {
        allowNull: false,
        type: Sequelize.STRING,
        default: 'EGP'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dimensionals');
  }
};