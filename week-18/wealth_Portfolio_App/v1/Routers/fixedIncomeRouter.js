const { getAllFixedIncome, postFixedIncome, updateFixedIncome, deleteFixedIncome } = require('../Controllers/fixedIncomeController');
const { userTokenValidator } = require('../Middlewares/userAuth')

const router = require('express').Router()

router.get('/fixedincome',userTokenValidator,getAllFixedIncome)

router.post('/fixedincome',userTokenValidator,postFixedIncome)

router.put('/fixedincome',updateFixedIncome);

router.delete('/fixedincome',deleteFixedIncome)
module.exports = router