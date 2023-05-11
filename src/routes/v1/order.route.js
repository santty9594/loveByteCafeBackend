const express = require('express');
const orderController = require('../../controllers/order.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/accept_order', auth(), orderController.createOrder);
router.post('/get_orders', auth(), orderController.getOrdersByStaus);
router.post('/get_order_details', auth(), orderController.getOrderDetails);

module.exports = router;
