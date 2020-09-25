const express = require('express');
const router = express.Router();
const paths = require('./paths/fundWalletFrmGTPaths');
const GTBnkController = require("../controllers/fundWalletFromGTBnk");

// methods
router.post(paths.initiateFund, GTBnkController.initiateFunding );
router.post(paths.validate, GTBnkController.validate );
router.post(paths.verify, GTBnkController.verify);



module.exports = router;