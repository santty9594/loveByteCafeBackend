const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const authController = require('../../controllers/auth.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/register', authController.register);
router.post('/verify-otp',authController.verify);
router.post('/resend-otp',authController.resendOTP);
router.post('/login-with-phone',authController.loginWithPhone);

module.exports = router;
