'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    name: DataTypes.STRING
  }, {});
  Level.associate = function(models) {
    // associations can be defined here
  };
  return Level;
};