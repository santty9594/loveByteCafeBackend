const express = require('express');
const outletController = require('../../controllers/outlet.controller');

const router = express.Router();

router.post('/create', outletController.createOutlet);

module.exports = router;
