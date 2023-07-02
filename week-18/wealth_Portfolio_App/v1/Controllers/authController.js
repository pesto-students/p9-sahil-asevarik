const authServices = require('../Services/authServices');
const postSignUp = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    try {
        const result = await authServices.handleSignUpUser(email, password)
        console.log("result",result);
        res.status(200).json({success:{email:result.email,
                                id:result.id,
                             }});
    }
    catch (err) {
        console.log("error occured",err);
        res.status(501).json({error:err});
    }
}
const postSignIn = async(req, res) => {
    const email = req.body.email
    const password = req.body.password
    try {
        const result = await authServices.handleSignInUser(email, password)
        // console.log("result",result);
        res.status(200).json({success:result});
    }
    catch (err) {
        res.status(501).json({error:err});
    }
}
module.exports = {
    postSignIn,
    postSignUp
}