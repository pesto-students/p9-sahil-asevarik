const router = require('express').Router();
const weatherController = require('../controllers/weatherController');

router.get('/cities/forecast',weatherController.getCityForcast);
router.get('/cities/bulk',weatherController.getBulkCities);
router.get('/cities/:page',weatherController.getBulkCities);
router.get('/cities',weatherController.getCityWeather);
module.exports = router