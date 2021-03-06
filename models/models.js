var mongoose = require('mongoose');
var config = require('../config/config.json');
var connect = process.env.MONGODB_URI || config.MONGODB_URI;
var Schema = mongoose.Schema;

// If you're getting an error here, it's probably because
// your connect string is not defined or incorrect.
mongoose.connect(connect);
// User schema
var userSchema = new Schema({
  name: String,
  email: String,
  role: String,
  time: Date,
  referrer: String
})

var User = mongoose.model('User', userSchema);

var adminSchema = new Schema({
  username: String,
  password: String
})

var Admin = mongoose.model('Admin', adminSchema);

module.exports = {
  User: User,
  Admin: Admin
}
