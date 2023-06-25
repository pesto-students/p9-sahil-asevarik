const equityService = require('../Services/equityServices');
const getAllEquities= async (req,res)=>{
    try{
        const result = await equityService.handleGetEquities(req.userData);
        res.status(201).json({success:{equities:result}});
    }catch(error){
        res.status(501).json({error:error});
    }
}
const postEquity =async (req,res)=>{
    try{
        const result = await equityService.handlePostEquity(req.userData,req.body.name,req.body.amount);
        res.status(201).json({success:result});
    }catch(error){
        res.status(501).json({error:error});
    }
    
}

const updateEquity = async(req,res)=>{
    try{
        const result = await equityService.handleUpdateEquities(req.body);
        res.status(201).json({success:result});
    }catch(err){
        res.status(501).json({error:err});
    }
}

const deleteEquity = async(req,res)=>{
    try{
        const result = await equityService.handleDeleteEquities(req.body);
        res.status(201).json({success:result})
    }catch(err){
        res.status(501).json({error:err});
    }
}

module.exports={
    getAllEquities,
    postEquity,
    updateEquity,
    deleteEquity
}