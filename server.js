const express = require('express');
const connectDB = require('./utils/db');
const Saving = require('./routes/Saving'); 

const app = express();

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/save', Saving);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
