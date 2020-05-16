'use strict';
module.exports = (sequelize, DataTypes) => {
  const Border = sequelize.define('Border', {
    name: DataTypes.STRING
  }, {});
  Border.associate = function(models) {
    models.Border.belongsToMany(models.Dimension, {
      through: {
        model: models.Dimensional,
        unique: false,
        scope: {
          taggableType: 'border'
        }
      },
      foreignKey: 'klassId',
      constraints: false
    });
  };
  return Border;
};