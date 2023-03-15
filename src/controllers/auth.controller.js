const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const generateOTP = require('../utils/generateOTP');
const { smsService, authService, userService, tokenService, emailService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(200).json({
    type: "success",
    message: "Account created OTP sended to mobile number",
  });
  const otp = generateOTP(6);
  user.phoneOtp = otp;
  await user.save();
  await smsService.sendSms(otp);
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyPhoneOtp = catchAsync(async (req, res) => {
  const user = await authService.verifyPhoneOtp(req.body);
  const token = tokenService.generateVerifyPhoneToken(user);
  // user.phoneOtp = "";
  await user.save();
  res.status(201).json({
    type: "success",
    message: "OTP verified successfully",
    data: {
      token,
      userId: user._id,
    },
  });
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyPhoneOtp,
};
