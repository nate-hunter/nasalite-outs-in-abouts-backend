const User = require('../models/User');
const router = require('express').Router();
const bcrypt = require('bcrypt');

// Register new 'User'
router.post('/register', async (req, res) => {
  // 1. Generate a new password
  // 2. Create a new 'User'
  // 3. Save created 'User'
  // 4. Respond w/status of 200
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login a 'User'
router.post('/login', async (req, res) => {
  // 1. Find 'User'  (send 400 response if not found)
  // 2. Validate password  (send 400 response if invalid)
  // 3. Send 200 response
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) res.status(400).json("User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) res.status(400).json("Invalid password");

    res.status(200).json({ 
      _id: user._id,
      username: user.username
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;