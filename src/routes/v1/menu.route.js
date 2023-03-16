const express = require('express');
const menuController = require('../../controllers/menu.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create', menuController.createMenu);

module.exports = router;
