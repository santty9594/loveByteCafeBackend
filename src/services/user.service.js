const httpStatus = require('http-status');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { generateCode, generateOTP } = require('../utils/helper');

const createUser = async (userBody) => {
  let { phone, user_type } = userBody;
  const phoneExist = await User.findOne({ phone });
  if (phoneExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Phone already taken');
  }
  userBody.isNewUser = !phoneExist ? true : false;
  userBody.user_type = user_type;
  userBody.code = await generateCode("USER_");
  userBody.phone_otp = await generateOTP();
  //SMS will be trigger here
  return User.create(userBody);
};


const resendOTP = async (userBody) => {
  let { phone } = userBody;
  const user = await User.findOne({ phone });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Phone number not exist');
  }
  user.phone_otp = await generateOTP();
  await user.save();
  return user;
};

const loginWithPhone = async (userBody) => {
  const { phone } = userBody;
  const user = await User.findOne({ phone});
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Phone number not exist');
  }
  user.phone_otp = await generateOTP();
  await user.save();
  return user;
};

const verifyUser = async (userBody) => {
  let { otp } = userBody;
  const user = await User.findOne({ phone_otp: otp });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found')
  }
  user.phone_otp = '';
  await user.save();
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
  loginWithPhone,
  verifyUser,
  resendOTP,
  queryUsers,
  getUserById,
  getUserByEmail,
  deleteUserById,
};
