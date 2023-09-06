const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');

const createOrder = catchAsync(async (req, res) => {
  const Order = await orderService.createOrder(req.body);
  res.status(200).json({
    status: 0,
    message: "Payment Successfully Completed ",
    data: Order
  });
});


const getOrder = catchAsync(async (req, res) => {
  const Order = await orderService.getOrderByDate(req.body);
  res.status(200).json({
    status: 0,
    message: "Fetch Record Successfully",
    data: Order
  });
});

const getOrdersByStaus = catchAsync(async (req, res) => {
  const result = await orderService.queryByStatus(req.body);
  res.send(result);
});

const getOrderDetails = catchAsync(async (req, res) => {
  const result = await orderService.queryByDetails(req.body);
  res.send(result);
});

const accetOrder = catchAsync(async (req, res) => {
  const result = await orderService.queryAccept(req.body);
  res.send(result);
});

module.exports = {
  createOrder,
  getOrder,
  getOrdersByStaus,
  getOrderDetails,
  accetOrder
};
