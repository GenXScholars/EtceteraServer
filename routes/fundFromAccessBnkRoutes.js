const express = require('express');
const router = express.Router();
const paths = require('./paths/fundWalletFrmAccessPaths');
const AccessBnkController = require("../controllers/fundWalletFromAccess");

// methods
router.post(paths.initiateFund, AccessBnkController.initiateFunding );
router.post(paths.validate, AccessBnkController.validate );
router.post(paths.verify, AccessBnkController.verify);



module.exports = router;