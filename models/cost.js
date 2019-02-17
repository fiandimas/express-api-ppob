'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cost = sequelize.define('Cost', {
    power: DataTypes.INTEGER,
    cost: DataTypes.INTEGER
  }, {});
  Cost.associate = function(models) {
    // associations can be defined here
  };
  return Cost;
};