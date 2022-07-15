const express = require('express');
const router = express.Router();
const LoginController = require('../app/controllers/LoginController');

router.get('/', LoginController.show);
router.post('/register', LoginController.register);

module.exports = router;