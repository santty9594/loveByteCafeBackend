const httpStatus = require('http-status');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');

const createOrder = async (OrderBody) => {
  return Order.create(OrderBody);
};

const queryOrders = async (filter, options) => {
  const Orders = await Order.paginate(filter, options);
  return Orders;
};

const getOrderById = async (id) => {
  return Order.findById(id);
};

const updateOrderById = async (OrderId, updateBody) => {
  const order = await getOrderById(OrderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  Object.assign(order, updateBody);
  await order.save();
  return order;
};

const deleteOrderById = async (OrderId) => {
  const order = await getOrderById(OrderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  await order.remove();
  return order;
};

module.exports = {
  createOrder,
  queryOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
