const sequelize = require('../../Common/database');
const Sequelize = require('sequelize');
const User = require('./User');
const FixedIncome = sequelize.define('FixedIncome',{
    income_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
},
{
    timestamps:true,
    updatedAt:'updateAt',
    createdAt:'createdAt'
});

//association one to many to user
User.hasMany(FixedIncome);
FixedIncome.belongsTo(User,{constraints:true,onDelete:'CASCADE'});

module.exports = FixedIncome

