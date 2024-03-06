const mongoose = require('mongoose');
require('dotenv').config()


const connectToDB = async () => {
  try {
   await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSCODE}@cluster0.kkf61fz.mongodb.net/Granny's_Tale?retryWrites=true&w=majority&appName=Cluster0`)
    console.log('📦 connected to mongoDB');
  } catch (err) {
    console.error('Error connecting to mongoDB:', err.message);
  }
};



const checkConnection = () => {
    return mongoose.connection.readyState === 1;
}

module.exports = {
  connectToDB,
  checkConnection
};
