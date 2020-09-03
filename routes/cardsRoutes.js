const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const paths = require('./paths/creditCardsApiPaths');


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
const CreditCardsController = require('../controllers/cards');
const errorHandler = require('../_helpers/errorhandler');

// configure cors
var cors = require('cors');

router.post(paths.creatACreditCard, CreditCardsController.create);
router.get(paths.getSingleCreditCards, CreditCardsController.getByCardId);
router.post(paths.getAllcreditCards, CreditCardsController.getAllCreditCards);
router.patch(paths.updateCreditCard, CreditCardsController.updateCardInfo);
router.post(paths.deleteACreditCard, CreditCardsController.deleteCard);



module.exports = router;