const bcrypt = require('bcrypt');
const User = require('../Models/User');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const handleSignUpUser = async (email, password) => {
    //entering the hashed password into the db ,returns userModel if successfull else throws error
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const userModel = await  User.create({
            email: email,
            password: hashedPassword,})
        return userModel;
    }
    catch(error){
        throw error
    }
}

const handleSignInUser = async (email,password)=>{
    const user = await User.findOne({where:{email:email}});
    if(user){
        console.log("here");
        const match = await bcrypt.compare(password,user.password);
        if(match){
            console.log("matched successful");
            const token = jwt.sign({
                email:user.email,
                id:user.id,
            },
                process.env.JWT_KEY,
                {
                    expiresIn:'1h'
                }
            )
            return {token:token};
        }else{
            console.log("occured here");
            throw "User Password Not valid"
        }
    }else{
            throw "User with this email not found"
    }
    
}

module.exports = {
    handleSignUpUser,
    handleSignInUser
}