const File = require('../model/file')

const folder = require('../model/file')

exports.createfile = async(req,res)=>{
    try{
        const obj ={
            write:req.body.write,
            
        }
        const reult = await folder.create(obj)
        res.send(reult)
    }
    catch(error){
        console.log("errrr",error)
    }
}