const sequelize = require('../../Common/database');
const Sequelize = require('sequelize');
const User = require('./User');
const Asset = sequelize.define('asset',{
    asset_id:{
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
User.hasMany(Asset);
Asset.belongsTo(User,{constraints:true,onDelete:'CASCADE'});

module.exports = Asset

