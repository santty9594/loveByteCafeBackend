const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { inventoryService } = require('../services');

const createInventory = catchAsync(async (req, res) => {
  const Inventory = await inventoryService.createInventory(req.body);
  res.status(200).json({
    status: 0,
    message: "Inventory Successfully Created ",
    data: Inventory
  });
});

const updateInventory = catchAsync(async (req, res) => {
  const Inventory = await inventoryService.updateInventory(req.body);
  if (!Inventory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Issue in inventory update');
  }
  res.status(200).json({
    status: 0,
    message: "Inventory Updated",
  });
});

const getInventory = catchAsync(async (req, res) => {
  const Inventory = await inventoryService.getInventoryByDate(req.body);
  res.status(200).json({
    status: 0,
    message: "Fetch Record Successfully",
    data: Inventory
  });
});

const deleteInventory = catchAsync(async (req, res) => {
  const Menu = await inventoryService.deleteInventory(req.body);
  if (!Menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  res.status(200).json({
    status: 0,
    message: "Menu Deleted",
  });
})

module.exports = {
  createInventory,
  updateInventory,
  getInventory,
  deleteInventory,
};
