const express = require('express');
const router = express.Router();
const transactionController = require('../../../controller/api/v1');
router.get('/y',(req,res)=>{
    return res.send('hi')
})
router.get('/sales',transactionController.combinedData);
module.exports = router;