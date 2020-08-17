var express = require('express');
var router = express.Router();
const homeController = require('../controllers/indexController');

/* GET home page. */
router.get('/', homeController.root);

module.exports = router;
