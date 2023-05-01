const userModel = require('../models/userModel');
const crypto = require('crypto');
const { hashPassword, comparePassword } = require('../helpers/authHelper');
const JWT = require('jsonwebtoken');
const catchAsync = require('./../utils/catchAsync');
const appError = require('./../utils/appError');
const sendEmail = require('./../utils/email');
exports.signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) return res.send({ message: 'Name is required' });
    if (!email) return res.send({ message: 'Email is required' });
    if (!password) return res.send({ message: 'Password is required' });
    //chech user exist
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: 'Already Registerd Please Login',
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();
    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    return res.send(500).json({
      success: false,
      message: 'Error in Registration',
      error,
    });
  }
};

//POST LOGIN
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: 'Invalid email or password',
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email is not registerd',
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: 'Invalid Password',
      });
    }

    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    return res.status(200).send({
      success: true,
      message: 'login successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login',
      error,
    });
  }
};
exports.testController = (req, res) => {
  try {
    res.send('Protected Routes');
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return next(new appError('There is no user with email address.', 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/auth/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 min)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new appError('There was an error sending the email. Try again later!'),
      500
    );
  }
});
exports.resetPassword = catchAsync(async (req, res, next) => {
  //1)get user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  const user = await userModel.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //2) if token has not expired ans there is user set the password
  if (!user) {
    return next(new appError('Token is invalid or Expired', 400));
  }
  const hashedPassword = await hashPassword(req.body.password);
  user.password = hashedPassword;
  user.passwordResetExpires = undefined;
  user.passwordResetToken = undefined;
  await user.save();
  //3) update changedpasswordat property for the user
  //4) logged the user in , send JWT
  const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  return res.status(200).send({
    success: true,
    message: 'login successfully',
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    token,
  });
});
