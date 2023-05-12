const express = require('express');
const menuController = require('../../controllers/menu.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/save_outlet_menu',auth(), menuController.createMenu);
router.post('/get_outlet_menu',auth(), menuController.getMenu);
module.exports = router;
