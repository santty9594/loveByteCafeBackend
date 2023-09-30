const httpStatus = require('http-status');
const { Menu, MenuCategory } = require('../models');
const ApiError = require('../utils/ApiError');

const createMenu = async (menuBody) => {
  return Menu.create(menuBody);
};

const getMenus = async (body) => {
  let { outlet_code } = await body
  const menu = await Menu.find({})
  if (menu && menu.length < 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Empty');
  }
  return menu;
};

const updateMenu = async (body) => {
  let { id, name, price } = await body
  const menu = await Menu.updateOne({ _id: id },
    {
      $set: { name, price }
    },
    { upsert: true }
  )
  return menu;
};

const deleteMenu = async (body) => {
  let { id } = await body
  const menu = await Menu.remove({ _id: id })
  return menu;
};

const getMenuTypes = async (body) => {
  let { outlet_code } = await body
  const menu = await MenuCategory.find({})
  if (menu && menu.length < 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Empty');
  }
  if (menu) {
    menu.reverse();
  }
  return menu;
};

module.exports = {
  createMenu,
  getMenus,
  getMenuTypes,
  updateMenu,
  deleteMenu,
};
