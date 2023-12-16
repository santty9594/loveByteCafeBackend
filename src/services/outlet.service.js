const { Outlet } = require('../models');
const ApiError = require('../utils/ApiError');
const { generateCode } = require('../utils/helper');

const createOutlet = async (outletBody) => {
  outletBody.outlet_code = await generateCode("Outlet_");
  return Outlet.create(outletBody);
};

const getAllOulet = async (body) => {
  return Outlet.find({ user_code: body.user_code });
};

const getOutletById = async (id) => {
  return Outlet.findOne({ _id: id });
};

module.exports = {
  createOutlet,
  getAllOulet,
  getOutletById,
};
