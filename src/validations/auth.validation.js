const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    phone: Joi.string().required()
  }).unknown(true),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  }).unknown(true),
};

const logout = {
  body: Joi.object().keys({
  refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
};
