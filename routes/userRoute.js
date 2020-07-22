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
const UserController = require('../controllers/user');
const errorHandler = require('../_helpers/errorhandler');

// configure cors
var cors = require('cors');

router.post(paths.userSignUp, UserController.register);
router.post(paths.userLogin, UserController.userLogin);
router.get(paths.getAllUsers, UserController.getAll);


module.exports = router;