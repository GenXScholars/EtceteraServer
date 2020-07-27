const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const paths = require('./paths/paths');


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
const MerchantController = require('../controllers/merchant');
const errorHandler = require('../_helpers/errorhandler');

// configure cors
var cors = require('cors');

router.post(paths.merchantSignUp, MerchantController.register);
router.post(paths.merchantLogin, MerchantController.merchantLogin);
router.patch(paths.updateMerchant, MerchantController.update);
router.post(paths.getSingleMerchant, MerchantController.getById);
router.get(paths.getAllMerchants, MerchantController.getAll);
router.delete(paths.deleteMerchant, MerchantController.delete);
router.post(paths.getCurrentMerchant, MerchantController.getCurrent);


module.exports = router;