const Equity  = require('../Models/Equity');
const User = require('../Models/User');
const handlePostEquity = async (userData,name,amount)=>{
    try{
        const user = await User.findByPk(userData.id);
        if(user){
         const result = await user.createEquity({
                name:name,
                amount:amount,
            });
        return result
        }
        
    }
    catch(error){
        throw error
    }
}

const handleGetEquities = async(userData)=>{
    try{
        const user = await User.findByPk(userData.id,{include:Equity});
        if(user){
            return user.Equities
        }
        throw "no equities found";
    }catch(err){
        throw err
    }
}

const handleUpdateEquities = async (equity)=>{
    try{
        console.log(equity.name,equity.amount,equity.equity_id);
        const result = await Equity.update({
            name:equity.name,
            amount:equity.amount,
        },{where:{equity_id:equity.equity_id}})
        return result
    }catch(error){
        throw err
    }
}

const handleDeleteEquities = async(equity)=>{
    try{
        console.log(equity.id);
        const result = await Equity.destroy({where:{equity_id:equity.id}})
        return result
    }catch(error){
        throw error
    }
}


module.exports = {
    handlePostEquity,
    handleGetEquities,
    handleUpdateEquities,
    handleDeleteEquities
}