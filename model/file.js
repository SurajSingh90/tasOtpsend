const mongoose = require('mongoose')
const fileschem = new  mongoose.Schema({
    write:{
        type:String
    },
   
})

module.exports = mongoose.model("file",fileschem)