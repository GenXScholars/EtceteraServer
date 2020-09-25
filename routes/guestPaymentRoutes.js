const express = require('express');
const router = express.Router();
const paths = require('./paths/fundWalletsByCardsPaths');
const GuestPaymentController = require('../controllers/guestPayment');

// methods
router.post(paths);
router.post(paths);


module.exports = router;