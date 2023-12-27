const express = require('express');
const User = require('../models/User');
const router = express.Router();
const authController = require('../controllers/authController');

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/users', authController.createUser);

module.exports = router;
