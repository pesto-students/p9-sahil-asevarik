const fixedIncomeService = require('../Services/fixedIncomeServices');
const getAllFixedIncome= async (req,res)=>{
    try{
        const result = await fixedIncomeService.handleGetFixedIncome(req.userData);
        res.status(201).json({success:{FixedIncomes:result}});
    }catch(error){
        res.status(501).json({error:error});
    }
}
const postFixedIncome =async (req,res)=>{
    try{
        const result = await fixedIncomeService.handlePostFixedIncome(req.userData,req.body.name,req.body.amount);
        res.status(201).json({success:result});
    }catch(error){
        res.status(501).json({error:error});
    }
    
}

const updateFixedIncome = async(req,res)=>{
    try{
        const result = await fixedIncomeService.handleUpdateFixedIncome(req.body);
        res.status(201).json({success:result});
    }catch(err){
        res.status(501).json({error:err});
    }
}

const deleteFixedIncome= async(req,res)=>{
    try{
        const result = await fixedIncomeService.handleDeleteFixedIncome(req.body);
        res.status(201).json({success:result})
    }catch(err){
        res.status(501).json({error:err});
    }
}

module.exports={
    getAllFixedIncome,
    postFixedIncome,
    updateFixedIncome,
    deleteFixedIncome
}