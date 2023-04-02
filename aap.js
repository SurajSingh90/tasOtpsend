const express = require('express')
const mongoose = require("mongoose")
const {folderroutes,filerroutes}= require('./routes')
const app = express()
app.use(express.json())
app.use(folderroutes)
app.use(filerroutes)
mongoose.connect("mongodb://localhost:/foldertsk")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3500, () => {
      console.log("Application running on port 3500");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

