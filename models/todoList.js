const Sequelize = require('sequelize');
const db = require('../config/dbConnection');

const todoList = db.define('todoItems', {
    taskName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deadline: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    timestamps: false
});

module.exports = todoList;
