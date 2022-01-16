const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const user = require('./user');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const aposta = sequelize.define('aposta', {
    amount: {
       allowNull: false,
       type: Sequelize.INTEGER
    },
    equipa_apostada: {
        allowNull  : false,
        type: Sequelize.STRING
    }
  });


  aposta.associate = (models) => {
    aposta.belongsTo(models.user, {foreignKey: "user_id"})
    aposta.belongsTo(models.event,{foreignKey : "event_id"})
  }
  

  return aposta;
};