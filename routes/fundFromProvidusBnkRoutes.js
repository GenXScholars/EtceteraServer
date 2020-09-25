const express = require('express');
const router = express.Router();
const paths = require('./paths/fundWalletFrmProvidusPaths');
const ProvidusBnkController = require("../controllers/fundWalletFromProvidus");

// methods
router.post(paths.initiateFund, ProvidusBnkController.initiateFunding );
router.post(paths.validate, ProvidusBnkController.validate );
router.post(paths.verify, ProvidusBnkController.verify);



module.exports = router;