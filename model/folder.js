const mongoose = require('mongoose')
const folderschem = new  mongoose.Schema({
    title:{
        type:String
    },
    file:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"fileid"
    }]
})

module.exports = mongoose.model("folder",folderschem)