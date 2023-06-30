const Asset  = require('../Models/Assets');
const User = require('../Models/User');
const handlePostAsset = async (userData,name,amount)=>{
    try{
        const user = await User.findByPk(userData.id);
        if(user){
         const result = await user.createAsset({
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

const handleGetAssets = async(userData)=>{
    try{
        console.log(userData.id);
        const user = await User.findByPk(userData.id,{include:Asset});
        console.log("assets",user);
        if(user){
            return user.assets
        }
        throw "no equities found";
    }catch(err){
        throw err
    }
}

const handleUpdateAsset = async (asset)=>{
    try{
        console.log(asset.name,asset.amount,asset.asset_id);
        const result = await Asset.update({
            name:asset.name,
            amount:asset.amount,
        },{where:{asset_id:asset.asset_id}})
        return result
    }catch(error){
        throw err
    }
}

const handleDeleteAssets = async(asset)=>{
    try{
        console.log(asset.id);
        const result = await Asset.destroy({where:{asset_id:asset.id}})
        return result
    }catch(error){
        throw error
    }
}


module.exports = {
    handlePostAsset,
    handleGetAssets,
    handleUpdateAsset,
    handleDeleteAssets
}