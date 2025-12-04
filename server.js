const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://asahal7:MyMongo123!@cluster0.wd3fl4e.mongodb.net/?appName=Cluster0";


mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));


const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Habit Tracker Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

