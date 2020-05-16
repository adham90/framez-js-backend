'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dimensional = sequelize.define('Dimensional', {
    klassType: DataTypes.STRING,
    klassId: DataTypes.INTEGER,
    dimensionId: DataTypes.INTEGER,
    priceCents: DataTypes.INTEGER,
    priceCurrency: DataTypes.STRING
  }, {});

  Dimensional.associate = function(models) {
    models.Dimensional.belongsTo(models.Dimension, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Dimensional.belongsTo(models.Border, {
      foreignKey: 'klassId',
      scope: {
        klassType: 'border'
      },
      constraints: false,
      as: 'borders'
    });
    models.Dimensional.belongsTo(models.Mat, {
      foreignKey: 'klassId',
      scope: {
        klassType: 'mat'
      },
      constraints: false,
      as: 'mats'
    })
  };
  return Dimensional;
};