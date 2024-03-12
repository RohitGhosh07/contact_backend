const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ioniccompound6:Rohit071102@cluster0.4ky99us.mongodb.net/Dummy?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
