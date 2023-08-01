const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const { User } = require('../models');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');

const logout = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({ token: refreshToken, type: tokenTypes.REFRESH, blacklisted: false });
  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  await refreshTokenDoc.remove();
};

const refreshAuth = async (refreshToken) => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(refreshToken, tokenTypes.REFRESH);
    const user = await userService.getUserById(refreshTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.remove();
    return tokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
  }
};


const verifyPhoneOtp = async (body) => {
  try {
    const { email } = body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'User not Found');
    }
    if (user.phoneOtp !== otp) {
      throw new ApiError(httpStatus.UNAUTHORIZED, ' Incorrect Opt');
    }
    return user;
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Otp verification failed');
  }
};

module.exports = {
  logout,
  refreshAuth,
  verifyPhoneOtp,
};
