const jwt = require('jsonwebtoken');
const moment = require('moment');
const { User } = require('../models');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');

const generateToken = (userId, expires, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret);
};


const verifyToken = async (token) => {
  const payload = jwt.verify(token, config.jwt.secret);
  const tokenDoc = await User.findById(payload.sub)
  if (!tokenDoc) {
    throw new Error('Token not found');
  }
  return tokenDoc;
};

const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
  const accessToken = generateToken(user._id, accessTokenExpires);
  return accessToken;
};

module.exports = {
  generateToken,
  verifyToken,
  generateAuthTokens,
};
