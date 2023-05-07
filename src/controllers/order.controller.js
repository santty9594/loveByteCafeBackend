const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');

const createOrder = catchAsync(async (req, res) => {
  const Order = await orderService.createOrder(req.body);
  res.status(httpStatus.CREATED).send(Order);
});

const getOrdersByStaus = catchAsync(async (req, res) => {
  const result = await orderService.queryByStatus(res.body);
  res.send(result);
});

const getOrderDetails = catchAsync(async (req, res) => {
  const result = await orderService.queryByDetails(res.body);
  res.send(result);
});

const accetOrder = catchAsync(async (req, res) => {
  const result = await orderService.queryAccept(res.body);
  res.send(result);
});

module.exports = {
  createOrder,
  getOrdersByStaus,
  getOrderDetails,
  accetOrder
};
