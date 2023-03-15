const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { outletService } = require('../services');

const createOutlet = catchAsync(async (req, res) => {
  const Outlet = await outletService.createOutlet(req.body);
  res.status(httpStatus.CREATED).send(Outlet);
});

const getOutlets = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await outletService.queryOutlets(filter, options);
  res.send(result);
});

const getOutlet = catchAsync(async (req, res) => {
  const Outlet = await outletService.getOutletById(req.params.OutletId);
  if (!Outlet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Outlet not found');
  }
  res.send(Outlet);
});

const updateOutlet = catchAsync(async (req, res) => {
  const Outlet = await outletService.updateOutletById(req.params.OutletId, req.body);
  res.send(Outlet);
});

const deleteOutlet = catchAsync(async (req, res) => {
  await outletService.deleteOutletById(req.params.OutletId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createOutlet,
  getOutlets,
  getOutlet,
  updateOutlet,
  deleteOutlet,
};
