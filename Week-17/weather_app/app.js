const app = require('express')()
const citiesRouter = require('./router/WeatherRouter');

app.use('/',citiesRouter);


app.listen(3000,()=>{
    console.log('server started')
   
});
