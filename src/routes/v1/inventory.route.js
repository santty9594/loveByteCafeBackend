const express = require('express');
const inventoryController = require('../../controllers/inventory.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create', inventoryController.createInventory);
router.post('/update', inventoryController.updateInventory);
router.post('/get', inventoryController.getInventory);
router.post('/delete', inventoryController.deleteInventory);

module.exports = router;
