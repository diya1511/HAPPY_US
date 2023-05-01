const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

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
  role: {
    type: Number,
    default: 0,
  },
  picturePath: {
    type: String,
    default: '',
  },
  friends: {
    type: Array,
    default: [],
  },
  location: String,
  occupation: String,
  viewedProfile: Number,
  impressions: Number,
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const user = mongoose.model('User', userSchema);
module.exports = user;
