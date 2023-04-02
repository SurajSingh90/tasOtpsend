const express = require('express')
const routes = express()
const {createfile} = require('../controller/file')
routes.post('/file',createfile)

module.exports ={
    filerroutes:routes
}