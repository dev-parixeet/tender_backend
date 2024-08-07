const User = require('../models/User');

const registerUser = async (req, res) => {
  const { name, email, username, contact } = req.body;
  const profilePicture = req.file ? req.file.filename : '';

  if (!name || !email || !username || !contact || !profilePicture) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newUser = new User({
      name,
      email,
      username,
      contact,
      profilePicture,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, username, contact } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, username, contact },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { registerUser, getUsers, updateUser, deleteUser };
