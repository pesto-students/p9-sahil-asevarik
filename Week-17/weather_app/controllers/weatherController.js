const { default: axios } = require("axios");

const getBulkCities = async (req,res)=>{
   try{
    const {cities,per_page,page} = req.query;
   const locations =  cities.split(',').slice((page - 1) * per_page, page * per_page).map((city) => {
        return {
            q: city
        }
    });
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}`
    const weatherData = await axios.get(url,{
        data:{
            locations:locations
        }
    });
    res.status(200).json(weatherData.data);
   }catch(err){
    console.log(err);
    res.status(500).json({error:"unable to fetch the data"});
   }
}

const getCityForcast = async (req,res)=>{
    try{
        const {city,days} = req.query;
        if(days<1 || days>10){
            return res.status(413).json({error:'the number of days must be in range between 1 to 10'})
        }
        const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`
        const weatherData = await axios.get(url);
       return res.status(200).json(weatherData.data);
    }catch (err){
      return  res.status(500).json({error:"error fetching forcast data please try again later"})
    }
}


const getCityWeather = async (req,res)=>{
    try{
        const city = req.query.city;
        console.log(city);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEAHTER_API_KEY}&units=metric`;
        const weatherData = await axios.get(url);
        return res.status(200).json(weatherData.data);
    }catch (error){
        console.log(error);
        return res.status(500).json({message:'Error Fetching Data'})
    }
}
// be13270423a54d0c9cc54503231905

module.exports = {
    getBulkCities,
    getCityWeather,
    getCityForcast
}
