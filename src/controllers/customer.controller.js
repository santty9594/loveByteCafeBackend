const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { customerService } = require('../services');

const createCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.createCustomer(req.body);
  res.status(httpStatus.CREATED).send(customer);
});

const getCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomer(req.body);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'customer not found');
  }
  res.status(200).json({
    status: 0,
    message: "Fetch Menus Successful",
    data: customer
  });
});


module.exports = {
  createCustomer,
  getCustomer,
};
