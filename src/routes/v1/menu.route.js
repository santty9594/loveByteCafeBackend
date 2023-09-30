const express = require('express');
const menuController = require('../../controllers/menu.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/menus', menuController.getMenu);
router.post('/menus/category', menuController.getCategory);
router.post('/create', menuController.createMenu);
router.post('/update', menuController.updateMenu);
router.post('/delete', menuController.deleteMenu);

module.exports = router;
