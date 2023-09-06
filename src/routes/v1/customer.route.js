const express = require('express');
const customerController = require('../../controllers/customer.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create',customerController.createCustomer);
router.post('/get', customerController.getCustomer);

module.exports = router;
