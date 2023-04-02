
const folder = require("../model/folder");
// const db = require('../db')
const { ObjectId } = require('mongodb');
exports.createfolder = async (req, res) => {
  const obj = {
    title: req.body.title,
    file: req.body.file,
  };
  const reult = await folder.create(obj);
  res.send(reult);
};

exports.deletbyaggregation = async (req, res) => {
  try {
    const folderId = req.params.id;
    
    const result = await folder.aggregate([
      {
        $match: {
          _id: ObjectId(folderId)
        }
      },
      {
        $lookup: {
          from: "files",
          localField: "_id",
          foreignField: "folder_id",
          as: "files",
        },
      },
    ]).toArray();

    console.log(result);   
    res.send(result);
  } 
  catch (err) {
    return res.send(err);
    console.log("errr", err);
  }
};

exports.finaldelete = async(req,res)=>{
   try{
    let id = req.params.id; 
    let result = await folder.findOne({_id:id})
    if(!result){
      return res.send("id not valid")
    }
    console.log("resul=====",result.file);
    if (result['file'].length > 0) { 
      // Folder has associated notes, don't delete
  
      return res
        .status(400)
        .json({ error: "Folder has associated notes and cannot be deleted." });
    } else {
      // Folder does not have associated notes, safe to delete
      await folder.findByIdAndDelete(id);
    //   await folderId.save()
        return res.status(200).json({ message: "Folder deleted successfully." });
      
    }
   }    
   catch(err){
    res.send(err.message) 
   }
}