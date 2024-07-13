const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log("Connected to MongoDB".cyan.underline.bold);
  } catch (error) {
    console.error(`Connection Failed: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
