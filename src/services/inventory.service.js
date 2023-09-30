const httpStatus = require('http-status');
const { Inventory } = require('../models');
const ApiError = require('../utils/ApiError');
const { generateCode } = require('../utils/helper');

const createInventory = async (OrderBody) => {
  OrderBody.inventory_code = await generateCode("Inventory_");
  return Inventory.create(OrderBody);
};

const updateInventory = async (body) => {
  let { id, name, price } = await body
  const inventory = await Inventory.updateOne({ _id: id }, { $set: { name, price } }, { upsert: true });
  if (inventory && inventory.length < 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Empty');
  }
  return inventory;
};

const getInventoryByDate = async (body) => {
  let { offset, limit, } = await body
  const order = await Inventory.find({});
  if (order && order.length < 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Empty');
  }
  return order;
};

const deleteInventory = async (body) => {
  let { id } = await body
  const menu = await Inventory.remove({ _id: id })
  return menu;
}


module.exports = {
  createInventory,
  getInventoryByDate,
  updateInventory,
  deleteInventory
};
