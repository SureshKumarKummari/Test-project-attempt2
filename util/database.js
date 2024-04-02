const Sequelize=require('sequelize');

const sequelize=new Sequelize('node','root','SUresh@1289',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports=sequelize;