const express = require('express')
const app = express()
const indexRouter = require('./v1/Routers/indexRouter');
const bodyparser = require('body-parser');
const sequelize = require('./Common/database');

require('dotenv').config()


app.listen(process.env.PORT || 3020,()=>{
    // sequelize.sync({force:true});
    sequelize.sync();
    console.log('app listening at port',process.env.PORT);
})


app.use(bodyparser.json());
app.use('/v1',indexRouter);