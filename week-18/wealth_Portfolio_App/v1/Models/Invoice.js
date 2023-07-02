const sequelize = require('../../Common/database');
const Sequelize = require('sequelize');
const User = require('./User');
const Invoice = sequelize.define('Invoice',{
    invoice_id:{
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
    file_url:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    }
},
{
    timestamps:true,
    updatedAt:'updateAt',
    createdAt:'createdAt'
});

//association one to many to user
User.hasMany(Invoice);
Invoice.belongsTo(User,{constraints:true,onDelete:'CASCADE'});

module.exports = Invoice

