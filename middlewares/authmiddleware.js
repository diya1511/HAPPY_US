const JWT = require('jsonwebtoken');
const userModel = require('../models/userModel');
//protected token jwt based
exports.requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.REACT_APP_JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
//admin access
exports.isAdmin = async (req,res,next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(404).send({
        success: false,
        message: 'Unauthorized access'
      })
    }
    else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: 'Error in admin middleware',
  });
  }
}