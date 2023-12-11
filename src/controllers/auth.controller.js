const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(200).json({
    message: "Signup Successful",
    status: 0,
  });
  await user.save();
});

const verify = catchAsync(async (req, res) => {
  const user = await userService.verifyUser(req.body);
  let token = await tokenService.generateAuthTokens(user);
  if (!token) {
    return res.status(401).json({ message: 'Token not created' });
  }
  res.status(200).json({
    message: 'Verify Otp  Successfull',
    status: 0,
    data: {
      token
    }
  });
});

const resendOTP = catchAsync(async (req, res) => {
  const user = await userService.resendOTP(req.body);
  if (user) {
    res.status(200).json({
      message: "OTP Sent",
      status: 0,
    });
  }
});

const loginWithOtp = catchAsync(async (req, res) => {
  await userService.createUser(req.body);
  res.status(201).json({
    type: "success",
    message: "OTP sended to your registered phone number",
  });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  resendOTP,
  register,
  verify,
};
