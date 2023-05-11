const httpStatus = require('http-status');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');
const { generateCode } = require('../utils/helper');

const createOrder = async (OrderBody) => {
  OrderBody.order_code = await generateCode("Order_");
  return Order.create(OrderBody);
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
  queryByStatus,
  queryAccept,
  queryByDetails,
};
