const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const user = require('./user');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const wallet = sequelize.define('wallet', {
    amount: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  });


  wallet.associate = (models) => {
    wallet.belongsTo(models.user, {foreignKey: "user_id"})
  }
  

  return wallet;
};