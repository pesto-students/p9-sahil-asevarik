const multer = require('multer');
const path  = require('path');
const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'/invoices'));
    },
    filename:(req,file,cb)=>{
        const ext = file.mimetype.split("/")[1];
        cb(null,Date.now()+'--'+file.originalname);
    }
})

const multerFilter = (req,file,cb)=>{
    if(file.mimetype.split("/")[1]==='pdf'){
        cb(null,true);
    }else{
        cb(new Error("only pdf file is allowed"),false);
    }
}

const upload = multer({
    storage:fileStorageEngine,
    fileFilter:multerFilter
})
module.exports = {upload}