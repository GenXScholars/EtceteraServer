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
const WalletControllers = require('../controllers/wallet');
const errorHandler = require('../_helpers/errorhandler');

// configure cors
var cors = require('cors');


router.post(paths.createWallet, WalletControllers.create);
router.post(paths.verifyBvn, WalletControllers.verifyBVN);
router.post(paths.creditWallet, WalletControllers.creditWallet);
router.post(paths.debitWallet, WalletControllers.chargeWallet);
router.post(paths.getWalletBalance, WalletControllers.getWalletBalance);
router.post(paths.setPasswordForWallet, WalletControllers.setWalletPassword);
router.post(paths.setPinForWallet, WalletControllers.setWalletPin);
router.post(paths.getWalletTransactions, WalletControllers.getWalletTransactions);
router.post(paths.transferFromWalletToBank, WalletControllers.transferFromWalletToBank);
router.post(paths.getAWallet, WalletControllers.getWalletByid);
router.get(paths.getAllWallets, WalletControllers.getAllCreatedWallets);


module.exports = router;