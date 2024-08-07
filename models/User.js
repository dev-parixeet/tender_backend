const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  profilePicture: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
