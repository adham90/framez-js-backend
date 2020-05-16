'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dimension = sequelize.define('Dimension', {
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT
  }, {});
  Dimension.associate = function(models) {
    models.Dimension.hasMany(models.Dimensional);
  };
  return Dimension;
};