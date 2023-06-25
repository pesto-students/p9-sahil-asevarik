const jwt = require('jsonwebtoken')
const { userAuthSchema } = require('../Models/joi/UserModelSchema')
const userModel = require('../Models/User');
const userAuthFieldValidator = async (req, res, next) => {
    try {
        const isValid = await userAuthSchema.validateAsync(req.body);
        next();
    } catch (err) {
        res.status(409).json({ error: err })
    }
}
const userSignUp = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ where: { email: req.body.email } })
        if (user) throw "Mail already exsists please provide different value";
        next();
    } catch (err) {
        res.status(409).json({ error: err })
    }
}




const userTokenValidator = (req, res, next) => {

    try {
        const token = req.body.token
        console.log("here aaya", token);
        const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
        console.log(decoded);
        req.userData = decoded
        next();
    } catch (err) {
        res.status(401).json({ error: "Not Authorized" });
    }
}
module.exports = {
    userTokenValidator,
    userAuthFieldValidator,
    userSignUp
}