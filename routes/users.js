var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users home page. */
router.get('/', usersController.root);

module.exports = router;
