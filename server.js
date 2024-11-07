const express = require('express');
const mongoose=require('mongoose')
const {connectToDB, checkConnection} = require('./db')
const routes=require('./routes.js')
const cors = require('cors')
const app = express();
const port = 8080;
require('dotenv').config();


app.use(express.json())
app.use(cors())
app.use('/api',routes)

connectToDB()
app.listen(port,()=>{
  console.log("Running on PORT",port);
});


