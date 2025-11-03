require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 4004;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/word-mirror-db';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
