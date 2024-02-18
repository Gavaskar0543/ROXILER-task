const express = require('express');
const router = express.Router();
const transactionController = require('../../../controller/api/v1');

router.get('/sales/:month',transactionController.combinedData);
module.exports = router;