const testFunc = (req,res)=>{
    return  Promise.resolve("promise resolve");
}

const asyncfun = async()=>{
    
    try{
        const result = await testFunc();
        console.log("it is here");
        return result;
    }catch(error){
        throw error 
    }
    
    
}
const syncFunction = async ()=>{
    try{
        const reilt =  await asyncfun()
        console.log(reilt);
    }catch(err){
        console.log(err);
    }
   
}

syncFunction();