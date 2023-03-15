const httpStatus = require('http-status');
const { Menu } = require('../models');
const ApiError = require('../utils/ApiError');

const createMenu = async (menuBody) => {
  return Menu.create(menuBody);
};

const queryMenus = async (filter, options) => {
  const Menus = await Menu.paginate(filter, options);
  return Menus;
};

const getMenuById = async (id) => {
  return Menu.findById(id);
};

const updateMenuById = async (MenuId, updateBody) => {
  const menu = await getMenuById(MenuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  Object.assign(menu, updateBody);
  await menu.save();
  return menu;
};

const deleteMenuById = async (MenuId) => {
  const menu = await getMenuById(MenuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  await menu.remove();
  return menu;
};

module.exports = {
  createMenu,
  queryMenus,
  getMenuById,
  updateMenuById,
  deleteMenuById,
};
