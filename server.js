const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Make sure this file exists
const app = express();

// MongoDB connection URI
const MONGO_URI = 'mongodb+srv://Zaruq2005:Zaruq2005@zaruq1.hb30f9q.mongodb.net/user_api?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Routes

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User({ name: req.body.name });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

// Update a user by ID
app.put('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true } // return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ msg: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete user' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
