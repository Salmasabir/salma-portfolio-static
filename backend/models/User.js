const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // hashé !
});
module.exports = mongoose.model('User', UserSchema);