const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const { authService, userService, tokenService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(200).json({
    type: "success",
    message: "Signup Successful",
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
    message: 'Signin successful',
    status: 0,
    data: {
      token
    }
  });

});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  verify,
};
