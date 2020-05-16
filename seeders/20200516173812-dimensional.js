'use strict';
var m = require('../models');
var _ = require('lodash')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let dimentions = [];
  
    await m.Dimension.findAll().then(function(rows) {
      rows.forEach(d => {
        dimentions.push(d.id)
      })
    })

    await m.Border.findAll().then(function(rows) {
      rows.forEach(border => {
        data.push({
          klassType: 'border',
          klassId: border.id,
          dimensionId: _.sample(dimentions),
          priceCents: 100,
          priceCurrency: 'EGP',
          createdAt: new Date(),
          updatedAt: new Date()
        })
      });
    });
  
    await m.Mat.findAll().then(function(rows) {
      rows.forEach(mat => {
        data.push({
          klassType: 'mat',
          klassId: mat.id,
          dimensionId: _.sample(dimentions),
          priceCents: 100,
          priceCurrency: 'EGP',
          createdAt: new Date(),
          updatedAt: new Date()
        })
      });
    });

    return await queryInterface.bulkInsert('Dimensionals', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dimensionals', null, {});
  }
};
