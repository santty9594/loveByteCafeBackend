const httpStatus = require('http-status');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');
const { generateCode } = require('../utils/helper');

const createOrder = async (OrderBody) => {
  OrderBody.order_code = await generateCode("Order_");
  return Order.create(OrderBody);
};

const getOrderByDate = async (body) => {
  let { filter } = await body
  let startDate, endDate;

  switch (filter) {
    case 'today':
      startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date();
      endDate.setHours(23, 59, 59, 999);
      break;
    case 'yesterday':
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 1);
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date();
      endDate.setDate(endDate.getDate() - 1);
      endDate.setHours(23, 59, 59, 999);
      break;
    case 'last30days':
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 29);
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date();
      endDate.setHours(23, 59, 59, 999);
      break;
    case 'daterange':
      const { start, end } = req.query;
      startDate = new Date(start);
      endDate = new Date(end);
      endDate.setHours(23, 59, 59, 999);
      break;
    default:
      // No filter, retrieve all data
      break;
  }

  const query = startDate && endDate ? { timestamp: { $gte: startDate, $lte: endDate } } : {};
  const order = await Order.find(query);
  if (order && order.length < 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Empty');
  }
  return order;
};

const queryByStatus = async (body) => {
  let { user_code, status, outlet_code, offset, limit, } = await body
  const order = await Order.find({ user_code, status, outlet_code }).skip(offset).limit(limit);
  if (order && order.length < 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Empty');
  }
  return order;
};

const queryByDetails = async (body) => {
  let { order_code } = await body
  const order = await Order.findOne({ order_code });
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  return order;
};


const queryAccept = async (OrderBody) => {
  return Order.create(OrderBody);
};


module.exports = {
  createOrder,
  getOrderByDate,
  queryByStatus,
  queryAccept,
  queryByDetails,
};
