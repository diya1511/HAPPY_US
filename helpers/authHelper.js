const bcrypt = require('bcrypt');
exports.hashPassword = async (password) => {
  try {
    const saltround = 10;
    const hashedPassword = await bcrypt.hash(password, saltround);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

exports.comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
