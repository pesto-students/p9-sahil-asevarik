const { getAllEquities, postEquity, updateEquity, deleteEquity } = require('../Controllers/equityController')
const { userTokenValidator } = require('../Middlewares/userAuth')

const router = require('express').Router()

router.get('/equities',userTokenValidator,getAllEquities)

router.post('/equity',userTokenValidator,postEquity)

router.put('/equity',updateEquity);

router.delete('/equity',deleteEquity)
module.exports = router