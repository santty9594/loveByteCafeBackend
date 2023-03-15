const httpStatus = require('http-status');
const { Outlet } = require('../models');
const ApiError = require('../utils/ApiError');

const createOutlet = async (outletBody) => {
  return Outlet.create(outletBody);
};

const queryOutlets = async (filter, options) => {
  const oultes = await Outlet.paginate(filter, options);
  return oultes;
};

const getOutletById = async (id) => {
  return Outlet.findById(id);
};

const updateOutletById = async (outletId, updateBody) => {
  const outlet = await getOutletById(outletId);
  if (!outlet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Outlet not found');
  }
  Object.assign(outlet, updateBody);
  await outlet.save();
  return outlet;
};

const deleteOutletById = async (outletId) => {
  const outlet = await getOutletById(outletId);
  if (!outlet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Outlet not found');
  }
  await outlet.remove();
  return outlet;
};

module.exports = {
  createOutlet,
  queryOutlets,
  getOutletById,
  updateOutletById,
  deleteOutletById,
};
