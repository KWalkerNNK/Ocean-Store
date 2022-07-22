const express = require('express');
const router = express.Router();
const LoginController = require('../app/controllers/LoginController');

router.post('/register', LoginController.register);
router.post('/continue', LoginController.login);
router.get('/', LoginController.show);

module.exports = router;