const userModel = require('../models/userModel');

exports.findUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.findUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    const friends = await Promise.all(
      user.friends.map((id) => userModel.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, name, occupation, location, picturePath }) => {
        return { _id, name, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//update
exports.addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await userModel.findById(id);
    const friend = await userModel.findById(friendId);
    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== friendId);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();
    const friends = await Promise.all(
      user.friends.map((id) => userModel.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, name, occupation, location, picturePath }) => {
        return { _id, name, occupation, location, picturePath };
      }
    );
    res.status(200).json({ formattedFriends });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
