const express = require('express');
const menuController = require('../../controllers/menu.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create',auth(), menuController.createMenu);
router.post('/menus', menuController.getMenu);
router.post('/menus/category',menuController.getCategory);

module.exports = router;
