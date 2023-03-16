const httpStatus = require('http-status');
const { User } = require('../models');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { generateUserCode } = require('../utils/helper');

const createUser = async (userBody) => {
  let { phone } = userBody;
  const phoneExist = await User.findOne({ phone });
  if (phoneExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Phone already taken');
  }
  userBody.code = await generateUserCode();
  return User.create(userBody);
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
  queryUsers,
  getUserById,
  getUserByEmail,
  deleteUserById,
};
