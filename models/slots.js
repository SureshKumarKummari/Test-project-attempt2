const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Books = sequelize.define('book', {
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
  returnDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  currentFine: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0 
  }
}, {
  hooks: {
    beforeUpdate: (book, options) => {
      if (book.returnDate < new Date()) {
        const hoursLate = Math.ceil((new Date() - book.returnDate) / (1000 * 60 * 60));
        const fine = hoursLate * 10; 
        book.currentFine = fine;
      }
    }
  }
});

module.exports = Books;



