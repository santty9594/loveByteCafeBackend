const httpStatus = require('http-status');
const { Customer } = require('../models');
const ApiError = require('../utils/ApiError');

const createCustomer = async (menuBody) => {
  return Customer.create(menuBody);
};

const getCustomer = async (body) => {
  let { phone } = await body
  const customer = await Customer.findOne({ phone })
  if (customer && customer.length < 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Empty');
  }
  return customer;
};

module.exports = {
  createCustomer,
  getCustomer,
};
