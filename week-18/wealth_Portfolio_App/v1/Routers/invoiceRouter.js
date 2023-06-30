const { upload } = require('../../Common/multerFileUpload');
const { getAllInvoices, postInvoice, updateInvoice, deleteInvoice } = require('../Controllers/invoiceController');
const { userTokenValidator } = require('../Middlewares/userAuth')

const router = require('express').Router()

router.get('/invoice',userTokenValidator,getAllInvoices)

router.post('/invoice',upload.single('invoice'),userTokenValidator,postInvoice)

router.put('/invoice',upload.single('invoice'),userTokenValidator,updateInvoice);

router.delete('/invoice',deleteInvoice)

module.exports = router