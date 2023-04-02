const express = require('express')
const routes = express()
const {createfolder,deletbyaggregation, finaldelete} = require('../controller/folder.js')
routes.post('/f',createfolder)
routes.delete('/d/:id',deletbyaggregation)
routes.delete('/delete/:id',finaldelete) 
module.exports ={
    folderroutes:routes
}