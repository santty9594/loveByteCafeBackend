const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { outletService } = require('../services');

const createOutlet = catchAsync(async (req, res) => {
  const Outlet = await outletService.createOutlet(req.body);
  res.status(httpStatus.CREATED).send(Outlet);
});

const getAllOutlet = catchAsync(async (req, res) => {
  const Outlet = await outletService.getAllOulet(req.body);
  res.status(httpStatus.CREATED).send(Outlet);
});

const getOutlet = catchAsync(async (req, res) => {
  const Outlet = await outletService.getOutletById(req.body.outlet_code);
  if (!Outlet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Outlet not found');
  }
  res.send(Outlet);
});

module.exports = {
  createOutlet,
  getAllOutlet,
  getOutlet,
};
