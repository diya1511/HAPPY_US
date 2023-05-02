const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

//read
router.get('/:id', userController.findUser);
router.get('/:id/friends', userController.findUserFriends);

//update
router.patch('/:id/:friendId', userController.addRemoveFriend);

module.exports = router;
