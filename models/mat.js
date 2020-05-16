'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mat = sequelize.define('Mat', {
    name: DataTypes.STRING,
    fill_color: DataTypes.STRING,
    border_color: DataTypes.STRING,
    paddings: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {});
  Mat.associate = function(models) {
    models.Mat.belongsToMany(models.Dimension, {
      through: {
        model: models.Dimensional,
        unique: false,
        scope: {
          taggableType: 'mat'
        }
      },
      foreignKey: 'klassId',
      constraints: false
    });  };
  return Mat;
};