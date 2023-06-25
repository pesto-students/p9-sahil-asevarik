const router = require('express').Router()
const authController = require('../Controllers/authController');
const userAuthMiddleWare = require('../Middlewares/userAuth');

router.post('/login',userAuthMiddleWare.userAuthFieldValidator,authController.postSignIn)

router.post('/signup',userAuthMiddleWare.userAuthFieldValidator,userAuthMiddleWare.userSignUp,authController.postSignUp)

module.exports=router