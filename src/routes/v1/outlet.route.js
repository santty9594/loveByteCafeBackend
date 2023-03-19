const express = require('express');
const outletController = require('../../controllers/outlet.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();
router.post('/create', auth(), outletController.createOutlet);
module.exports = router;
