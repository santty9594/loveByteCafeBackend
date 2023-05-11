const express = require('express');
const outletController = require('../../controllers/outlet.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/save_outlet_details', auth(), outletController.createOutlet);
router.post('/get_all_restaurants', auth(), outletController.getAllOutlet);
router.post('/get_outlet_details', auth(), outletController.getOutlet);

module.exports = router;
