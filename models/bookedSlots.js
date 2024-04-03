const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const booksReturned = sequelize.define('booksReturned', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  bookName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fine: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  returnDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = booksReturned;