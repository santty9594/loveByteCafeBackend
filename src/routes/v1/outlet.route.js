const express = require('express');
const outletController = require('../../controllers/outlet.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

// router.post('/create-outlet', auth(), outletController.createOutlet);
// router.post('/get-outlets', auth(), outletController.getAllOutlet);
// router.post('/get-outlet-details', auth(), outletController.getOutlet);


router.post('/create-outlet', outletController.createOutlet);
router.post('/get-outlets', outletController.getAllOutlet);
router.post('/get-outlet-details', outletController.getOutlet);
module.exports = router;
