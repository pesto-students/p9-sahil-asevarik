const indexRouter = require('express').Router();
const authRouter = require('./authRouter');
const equityRouter = require('./equityRouter');
const assetRouter = require('./assetRouter');
const fixedIncomeRouter = require('./fixedIncomeRouter');
const invoiceRouter  = require('./invoiceRouter');

indexRouter.use('/user',authRouter)
indexRouter.use('/user',equityRouter)
indexRouter.use('/user',assetRouter)
indexRouter.use('/user',fixedIncomeRouter)
indexRouter.use('/user',invoiceRouter)

module.exports=indexRouter
