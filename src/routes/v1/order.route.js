const express = require('express');
const orderController = require('../../controllers/order.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create', auth(), orderController.createOrder);

module.exports = router;
