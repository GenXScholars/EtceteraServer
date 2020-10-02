const debug = require("debug")("app:WALLETS");
const config = require("../config/constants");
const walletService = require("../services/walletServices");
const transactions = require("../services/notifications/transactionMail");
const Wallet = require("../models/walletModel");
const bcrypt = require("bcryptjs");
const walletCreationNotifications = require("../services/notifications/walletCreationNotifications");


 async function create(req, res, next){
   walletService.creatWallet(req.body,res, next)
   .then((info)=> {
        debug(info);
   }).catch(err => next(err))
    // debug("Data" + " " + wallet);
    //    const walletInfo = result.data.Data;  
    //    debug("phone number" + " " + walletInfo.PhoneNumber);
    //    debug("email" + " " + walletInfo.Email);
    //    debug("Available Balance" + " " + walletInfo.AvailableBalance);
    //    debug("BVN" + " " + walletInfo.BVN);
    //  change the null value of bvn from wallet Africa
      

//      Wallet.create(
//         {
//             walletOwner: walletInfo.AccountName,
//             walletPin: walletInfo.walletPin || "no pin set",
//             walletEmail: walletInfo.Email,
//             wqlletPassword: walletInfo.Passoword || "No password set",
//             phoneNumber: walletInfo.PhoneNumber,
//             walletBalance: walletInfo.AvailableBalance,
//             bankAccountNumber: walletInfo.AccountNo
//             }, function(err, wallet){
//         if(err) throw(err); 
//         // sendMailForWalletCreation.notifyWalletCreation(walletInfo);
        
//     }); 
   
}

function verifyBVN(req, res, next){
    walletService.verifyBvn(req.body)
    .then((results)=>{
        // results = JSON.stringify(results);
        debug("DATA" + " " + results);
         res.json({
             message: `your bvn was verified succesfully`,
             results
         })
    }).catch(err => next(err))
}

function creditWallet(req, res, next){
    walletService.creditWallet(req.body)
    .then((result)=> {
        const data = result.data.Data;
        debug(data)
        // transactions.sendCreditTransaction(data);
        res.json({
            message:`wallet credited with ...... succesfully`,
            data
        })
    }).catch(err => next(err))
}

function chargeWallet(req, res, next){
    walletService.chargeWallet(req.body)
    .then((result)=>{
        const data = result.headers;
        debug("DebitWallet" + " " + result);
        // transactions.sendDebitTransaction(data);
        return res.json({
            message:`wallet charged succesfuly`,
            
        })
    }).catch(err => next(err))
}

function getWalletBalance(req, res, next){
    walletService.getWalletBalance(req.body)
    .then((result)=>{
        res.json({
            message:`wallet balance retrieved succesfuly`,
            result
        })
    }).catch(err => next(err))
}

function setWalletPin(req, res, next){
    walletService.setWalletPin(req.body)
    .then((result)=>{
        const data = result.data.Data;
        walletCreationNotifications.notifyWalletPinSet(data);
        res.json({
            message:`wallet pin set succesfully`,
            result
        })
    }).catch(err => next(err))
}

function setWalletPassword(req, res, next){
    walletService.setWalletPassword(req.body)
    .then((result)=>{
        const data = result.data.Data;
        // walletCreationNotifications.notifyWalletPasswordSet(data);
        res.json({
            message: `wallet password set succesfully`,
            result
        })
    }).catch(err => next(err))
}

function getWalletTransactions(req, res, next){
    walletService.getWalletTransactions(req.body)
    .then((result)=>{
       res.json({
           message:`all transactions retrieved`,
           result
       })
    }).catch(err => next(err))
}

function transferFromWalletToBank(req, res, next){
    walletService.transferFromWalletToBank(req.body)
    .then((result)=>{
         res.json({
             message:`Transfer to bank was successful`,
             result
         })
    }).catch(err => next(err))
}


function getWalletByid(req, res, next){
    walletService.getAWalletById(req.body)
    .then((result) => {
        res.json({
            message: `wallet retreievd succesfuly`,
            result
        })
    }).catch(err => next(err))
}

function getAllCreatedWallets(req, res, next){
    walletService.getAllWallets(req.body)
    .then((result) => {
        const data = result.data.Data;
        res.json({
            message: `all wallets retrieved`,
            data
        })
    }

    ).catch(err => next(err))
}

module.exports = {
    create,
    verifyBVN,
    creditWallet,
    chargeWallet,
    getWalletBalance,
    setWalletPin,
    setWalletPassword,
    getWalletTransactions,
    transferFromWalletToBank,
    getWalletByid,
    getAllCreatedWallets
}