const sequelize = require('../../Common/database');
const Sequelize = require('sequelize')

const User = sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})



module.exports = User