const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm a password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords do not match',
    },
  },
});
userSchema.pre('save', async function (next) {
  //Only run this function if password was actually modified
  if (!this.isModified('password')) return next();
  //hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //delete confirmPassword field
  this.confirmPassword = undefined;
  next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;
