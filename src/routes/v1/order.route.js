const express = require('express');
const orderController = require('../../controllers/order.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/get', auth(), orderController.getOrder);
router.post('/create', auth(), orderController.createOrder);
router.post('/update', auth(), orderController.updateOrder);
router.post('/delete', auth(), orderController.createOrder);

module.exports = router;
