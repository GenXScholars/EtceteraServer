const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const paths = require('./paths/walletApiPaths');


// to be added for multiple api calls

// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
const WalletServices = require('../services/walletServices');
const errorHandler = require('../_helpers/errorhandler');

// configure cors
var cors = require('cors');


router.post(paths.createWallet, WalletServices.creatWallet);
router.post(paths.generateAcctNumber, WalletServices.generateAcctNumber);
router.post(paths.verifyBvn, WalletServices.verifyBvn);
router.post(paths.creditWallet, WalletServices.creditWallet);
router.post(paths.debitWallet, WalletServices.chargeWallet);
router.post(paths.getWalletBalance, WalletServices.getWalletBalance);
router.post(paths.setPasswordForWallet, WalletServices.setWalletPassword);
router.post(paths.setPinForWallet, WalletServices.setWalletPin);
router.post(paths.getWalletTransactions, WalletServices.getWalletTransactions);
router.post(paths.transferFromWalletToBank, WalletServices.transferFromWalletToBank);
router.post(paths.getAWallet, WalletServices.getAWalletById);













module.exports = router;