const assetService = require('../Services/assetServices');
const getAllAssets= async (req,res)=>{
    try{
        const result = await assetService.handleGetAssets(req.userData);
        res.status(201).json({success:{assets:result}});
    }catch(error){
        res.status(501).json({error:error});
    }
}
const postAsset =async (req,res)=>{
    try{
        const result = await assetService.handlePostAsset(req.userData,req.body.name,req.body.amount);
        res.status(201).json({success:result});
    }catch(error){
        res.status(501).json({error:error});
    }
    
}

const updateAsset = async(req,res)=>{
    try{
        const result = await assetService.handleUpdateAsset(req.body);
        res.status(201).json({success:result});
    }catch(err){
        res.status(501).json({error:err});
    }
}

const deleteAsset = async(req,res)=>{
    try{
        const result = await assetService.handleDeleteAssets(req.body);
        res.status(201).json({success:result})
    }catch(err){
        res.status(501).json({error:err});
    }
}

module.exports={
    getAllAssets,
    postAsset,
    updateAsset,
    deleteAsset
}