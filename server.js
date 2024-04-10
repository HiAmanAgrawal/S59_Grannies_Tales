const express = require('express');
const mongoose=require('mongoose')
const {connectToDB, checkConnection} = require('./db')
const routes=require('./routes.js')
const app = express();
const port = 8080;
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api',routes)

connectToDB()
app.listen(port,()=>{
  console.log("Running on PORT",port);
});


