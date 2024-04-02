const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const bookedSlot = sequelize.define('bookedSlot', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  link:{
    type: Sequelize.STRING,
    defaultValue: "https://meet.google.com/iuc-jtjy-cbc"
  }
});

module.exports = bookedSlot;