// import lib
const Sequelize = require('sequelize');

// import db instance
const db = require('../config/db');


const Quiz = db.define("quizz", {
  id: {
    type: Sequelize.UUIDV4,
    primaryKey: 
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },

  option1: {
    allowNull: false,
    type: Sequelize.STRING,
  },

  option2: {
    allowNull: false,
    type: Sequelize.STRING,
  },

  option3: {
    allowNull: false,
    type: Sequelize.STRING,
  },

  option4: {
    allowNull: false,
    type: Sequelize.STRING,
  },

  answer: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});


module.exports = Quiz;