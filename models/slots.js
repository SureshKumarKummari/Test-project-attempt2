const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const TimeSlot = sequelize.define('timeSlot', {
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
  available: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = TimeSlot;


