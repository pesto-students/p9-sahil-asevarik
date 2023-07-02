const inVoicesServices = require('../Services/invoiceService');
const getAllInvoices = async (req,res)=>{
    try{
        const result = await inVoicesServices.handleGetInvoices(req.userData);
        res.status(201).json({success:{invoices:result}});
    }catch(error){
        res.status(501).json({error:error});
    }
}
const postInvoice =async (req,res)=>{
    console.log("sdfadafas");
    try{
        console.log("from controller",req.body.name,req.file);
        const result = await inVoicesServices.handlePostInvoice(req.userData,req.body.name,req.file.path);
        res.status(201).json({success:result});
    }catch(error){
        res.status(501).json({error:error});
    }
    
}

const updateInvoice = async(req,res)=>{
    try{
        const result = await inVoicesServices.handleUpdateInvoice(req.body,req.file.path);
        res.status(201).json({success:result});
    }catch(err){
        res.status(501).json({error:err});
    }
}

const deleteInvoice = async(req,res)=>{
    try{
        const result = await inVoicesServices.handleDeleteInvoice(req.body);
        res.status(201).json({success:result})
    }catch(err){
        res.status(501).json({error:err});
    }
}

module.exports={
    getAllInvoices,
    postInvoice,
    updateInvoice,
    deleteInvoice
}