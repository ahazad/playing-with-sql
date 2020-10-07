// import lib
const Sequelize = require('sequelize');

// import db instance
const db = require('../config/db');


const Admin = db.define('admins', {
    username: {
        type:  Sequelize.STRING, 
        unique: true,
        allowNull: false,
    },
    password: Sequelize.STRING
});


module.exports = Admin;