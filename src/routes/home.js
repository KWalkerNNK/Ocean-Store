const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/clients/HomeController');

router.get('/:slug', HomeController.show);
router.get('/', HomeController.index);

module.exports = router;