var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET products home page. */
router.get('/', productsController.root);

module.exports = router;
