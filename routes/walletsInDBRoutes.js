const express = require('express');
const router = express.Router();
const paths = require('./paths/walletsInDbPaths');


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
const WalletControllers = require('../controllers/walletsInDB');
const errorHandler = require('../_helpers/errorhandler');

// configure cors
var cors = require('cors');

router.get(paths.getAllWalletsFromDB, WalletControllers.getAllWalletsFromDB);
router.get(paths.getAWalletById, WalletControllers.getWalletInDBByid);
router.get(paths.getAWalletBalance, WalletControllers.getWalletBalanceInDB);
router.delete(paths.deleteAWallet, WalletControllers.deleteAWallet);

module.exports = router;