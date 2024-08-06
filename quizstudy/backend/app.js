// app.js
const express = require('express');
const mongoose = require('mongoose');
const { port, mongoURI } = require('./config');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
