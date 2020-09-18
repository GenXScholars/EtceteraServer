const express = require('express');
const router = express.Router();
const paths = require('./paths/walletApiPaths');
const WalletControllers = require('../controllers/wallet');

// methods
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