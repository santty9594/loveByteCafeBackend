const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { generateOTP } = require('../utils/helper');
const { smsService, authService, userService, tokenService, emailService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(200).json({
    type: "success",
    message: "Account created OTP sended to mobile number",
  });
  const otp = generateOTP();
  user.phoneOtp = otp;
  await user.save();
  await smsService.sendSms(otp, user.phone);
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyPhoneOtp = catchAsync(async (req, res) => {
  const user = await authService.verifyPhoneOtp(req.body);
  const token = await tokenService.generateAuthTokens(user);
  user.phoneOtp = "";
  await user.save();
  res.status(201).json({
    type: "success", message: "OTP verified successfully",
    data: {
      token,
      userId: user._id,
    },
  });
});

module.exports = {
  register,
  logout,
  verifyPhoneOtp,
};
