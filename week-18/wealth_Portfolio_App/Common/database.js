const {Sequelize} = require('sequelize');
		 
const sequelize = new Sequelize('portfolio_wealth_App','root','12345678',{dialect:'mysql',host:'localhost'});
module.exports = sequelize; 