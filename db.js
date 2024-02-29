const mongoose = require('mongoose');
require('dotenv').config()
const URI = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.kkf61fz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectToDB = async () => {
  try {
   await mongoose.connect(URI)
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
