const { getAllAssets, postAsset, updateAsset, deleteAsset } = require('../Controllers/assetController');
const { userTokenValidator } = require('../Middlewares/userAuth')

const router = require('express').Router()

router.get('/assets',userTokenValidator,getAllAssets)

router.post('/asset',userTokenValidator,postAsset)

router.put('/asset',updateAsset);

router.delete('/asset',deleteAsset)

module.exports = router