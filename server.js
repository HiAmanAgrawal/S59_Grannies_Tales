const express = require('express');
const mongoose=require('mongoose')
const {connectToDB, checkConnection} = require('./db')
const routes=require('./routes.js')
const cors = require('cors')
const app = express();
const port = 8080;



app.use(express.json())
app.use(cors({origin:"https://s59-grannies-tales.onrender.com",Credentials:true}))
app.use('/api',routes)

connectToDB()
app.listen(port,()=>{
  console.log("Running on PORT",port);
});


