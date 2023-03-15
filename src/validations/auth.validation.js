const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    phone: Joi.number().required(),
    name: Joi.string().required(),
  }),
};


const logout = {
  body: Joi.object().keys({
 refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  register,
  logout,
};
