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
router.get(paths.getAllCreditCards, CreditCardsController.getAllCreditCards);
router.get(paths.getSingleCreditCards, CreditCardsController.getByCardId);9
router.put(paths.updateCreditCard, CreditCardsController.updateCardInfo);
router.delete(paths.deleteACreditCard, CreditCardsController.deleteCard);



module.exports = router;