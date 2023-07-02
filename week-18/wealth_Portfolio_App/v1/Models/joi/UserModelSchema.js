const joi = require('joi');

const userAuthSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(6).max(20).required()
})

module.exports= {
    userAuthSchema
}