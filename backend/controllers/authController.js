const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Get the username and password from user and role as Admin or Normal User
const signup = async (req, res) => {
  const { username, password, role } = req.body;
//Check if username already exists
  const userExists = await User.findOne({ username });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
//if not exists create a new user record
  const user = new User({ username, password, role });
  await user.save();
//token contains userid,role --> secure role based access and returns token as response
  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(201).json({ token });
};

// Login
//Extract data from request
const login = async (req, res) => {
  const { username, password } = req.body;
//Finds the user in database
  const user = await User.findOne({ username });
//Validates Credentials
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
//Valid Credentials generate a new JWT token and returns the token
  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};

module.exports = { signup, login };
