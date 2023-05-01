const express = require('express');
const { requireSignIn, isAdmin } = require('../middlewares/authmiddleware');
// const user = require('./models/userModel');
const authController = require('../controllers/authController');
const router = express.Router();

//register
router.post('/signup', authController.signupController);
//login
router.post('/login', authController.loginController);
// test
router.get('/test', requireSignIn, isAdmin, authController.testController);
//protected route auth
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//forgot password
router.post('/forgotPassword', authController.forgotPassword);
//reset password
router.patch('/resetPassword/:token', authController.resetPassword);
module.exports = router;
