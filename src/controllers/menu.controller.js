const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { menuService } = require('../services');

const createMenu = catchAsync(async (req, res) => {
  const Menu = await menuService.createMenu(req.body);
  res.status(httpStatus.CREATED).send(Menu);
});

const getMenus = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await menuService.queryMenus(filter, options);
  res.send(result);
});

const getMenu = catchAsync(async (req, res) => {
  const Menu = await menuService.getMenuById(req.params.MenuId);
  if (!Menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  res.send(Menu);
});

const updateMenu = catchAsync(async (req, res) => {
  const Menu = await menuService.updateMenuById(req.params.MenuId, req.body);
  res.send(Menu);
});

const deleteMenu = catchAsync(async (req, res) => {
  await menuService.deleteMenuById(req.params.MenuId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMenu,
  getMenus,
  getMenu,
  updateMenu,
  deleteMenu,
};
