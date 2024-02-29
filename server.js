const express = require('express');
const {connectToDB, checkConnection} = require('./db')
const app = express();
const port = 8080;

connectToDB()                              
app.get("/",(req,res)=>{
  if(checkConnection()){
    res.send("Connectd to MongoDB")
  }
  else{
    res.send("Not Connected")
  }
})
if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
