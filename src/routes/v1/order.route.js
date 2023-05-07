const express = require('express');
const orderController = require('../../controllers/order.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/get', auth(), orderController.getOrder);
router.post('/create', auth(), orderController.createOrder);
router.post('/get_orders', auth(), orderController.getOrdersByStaus);
router.post('/get_order_details', auth(), orderController.getOrderDetails);
router.post('/accept_order', auth(), orderController.accetOrder);

module.exports = router;
