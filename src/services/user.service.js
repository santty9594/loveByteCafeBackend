const httpStatus = require('http-status');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { generateCode } = require('../utils/helper');

const createUser = async (userBody) => {
  let { email } = userBody;
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  userBody.is_new_user = !emailExist ? true : false;
  userBody.code = await generateCode("USER_");
  return User.create(userBody);
};

const verifyUser = async (userBody) => {
  let { email, password } = userBody;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found')
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid credentials')
  }
  return user;
};

const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

const getUserById = async (id) => {
  return User.findById(id);
};


const getUserByEmail = async (email) => {
  return User.findOne({ email });
};


const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};


module.exports = {
  createUser,
  verifyUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  deleteUserById,
};
