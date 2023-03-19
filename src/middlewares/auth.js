const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { tokenService } = require('../services');

const auth = () => async (req, res, next) => {
  try {
    const header = req.headers.authorization
    if (!header) {
      throw new ApiError(httpStatus.FORBIDDEN, 'auth header is missing');
    }
    const token = header.split("Bearer ")[1];

    if (!token) {
      throw new ApiError(httpStatus.FORBIDDEN, 'auth token is missing');
    }
    const userId = await tokenService.verifyToken(token);
    if (!userId) {
      throw new ApiError(httpStatus.FORBIDDEN, 'use not exist');
    }
    next()
  } catch (err) {
    next(err)
  }
};


module.exports = auth;
