'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('Bill', {
    id_usage: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    total_meter: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Bill.associate = function(models) {
    // associations can be defined here
  };
  return Bill;
};