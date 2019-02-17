'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usage = sequelize.define('Usage', {
    id_customer: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    start_meter: DataTypes.INTEGER,
    finish_meter: DataTypes.INTEGER
  }, {});
  Usage.associate = function(models) {
    // associations can be defined here
  };
  return Usage;
};