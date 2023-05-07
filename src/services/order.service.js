const httpStatus = require('http-status');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');

const createOrder = async (OrderBody) => {
  return Order.create(OrderBody);
};

const queryByStatus = async (body) => {
  let { user_id, status_id, restuarant_id, offset, limit, } = await body
  const Orders = await Order.find({ user_id, status_id, restuarant_id }).skip(offset).limit(limit);
  if (Orders && Orders.length < 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Empty');
  }
  return Orders;
};


const queryByDetails = async (body) => {
  let { order_id } = await body
  const Order = await Order.findOne({ order_id });
  if (!Order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  return Orders;
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
