const userModel = require('../models/userModel');
const { hashPassword, comparePassword } = require('../helpers/authHelper');
const JWT = require('jsonwebtoken');

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
    const token = await JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );
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
