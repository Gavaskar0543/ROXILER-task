const express = require('express');
const router = express.Router();
const transactionController = require('../../../controller/api/v1');
router.get('/',transactionController.products_trancations);

module.exports = router;