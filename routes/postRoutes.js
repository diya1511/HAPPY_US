const express = require('express');
const { requireSignIn, isAdmin } = require('../middlewares/authmiddleware');
const postModel = require('../models/postModel');
const postController = require('../controllers/postController');
const router = express.Router();



//read
router.get('/', postController.feedsPosts);
router.get('/:userId/posts', postController.userPost);
//UPDATE
router.patch(':id/like', postController.likePost);


module.exports = router;
