'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    id_bill: DataTypes.INTEGER,
    date: DataTypes.DATE,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    admin_cost: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING,
    image: DataTypes.STRING,
    id_admin: DataTypes.INTEGER
  }, {});
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};