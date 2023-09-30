const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { menuService } = require('../services');

const createMenu = catchAsync(async (req, res) => {
  const Menu = await menuService.createMenu(req.body);
  if (!Menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu Not Created');
  }
  res.status(200).json({
    status: 0,
    message: "Menu Created",
  });
});

const getMenu = catchAsync(async (req, res) => {
  const Menu = await menuService.getMenus(req.body);
  if (!Menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  res.status(200).json({
    status: 0,
    message: "Fetch Menus Successful",
    data: Menu
  });
});

const getCategory = catchAsync(async (req, res) => {
  const Menu = await menuService.getMenuTypes(req.body);
  if (!Menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  res.status(200).json({
    status: 0,
    message: "Fetch Menus Category Successful",
    data: Menu
  });
});


const updateMenu = catchAsync(async (req, res) => {
  const Menu = await menuService.updateMenu(req.body);
  if (!Menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  res.status(200).json({
    status: 0,
    message: "Menu Updated",
  });
});


const deleteMenu = catchAsync(async (req, res) => {
  const Menu = await menuService.deleteMenu(req.body);
  if (!Menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  res.status(200).json({
    status: 0,
    message: "Menu Deleted",
  });
})

module.exports = {
  createMenu,
  getMenu,
  getCategory,
  updateMenu,
  deleteMenu
};
