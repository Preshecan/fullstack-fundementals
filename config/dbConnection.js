const Sequelize = require('sequelize');

try{
    module.exports = new Sequelize('postgres://postgres:159preprepre@localhost:5434/todoList-hooks', { dialect: 'postgres', protocol: 'postgres' });
}catch(err){
    console.log(err.red);
}
