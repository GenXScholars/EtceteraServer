const config = require('../config/constants');
const walletService = require('../services/walletServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Wallet = require("../models/walletModel");

module.exports = {
    create,
    getAcctNum,
    verifyBVN,
    creditWallet,
    chargeWallet,
    getWalletBalance,
    setWalletPin,
    setWalletPassword,
    getWalletTransactions,
    transferFromWalletToBank,
    getWalletByid
}

function create(req, res, next){
    console.log(req.body)
   walletService.creatWallet(req.body).then((result)=>{       
       res.json({
           message : ` your wallet was created succesffully`,
           result
       })
   })
   .catch((err)=>{
       next(err)
   })
}

function getAcctNum(req, res, next){
    walletService.generateAcctNumber(req.body)
    .then((result)=>{
        res.json({
            message:`succcesfully genarated account number .....`,
            result
        })
    })
    .catch((err)=>{
        next(err)
    })
}

function verifyBVN(req, res, next){
    walletService.verifyBvn(req.body)
    .then((result)=>{
         res.json({
             message: `your bvn was verified succesfully`
         })
    }).catch(err => next(err))
}

function creditWallet(req, res, next){
    walletService.creditWallet(req.body)
    .then((result)=> {
        res.json({
            message:`wallet credited with ...... succesfully`,
            result
        })
    }).catch(err => next(err))
}

function chargeWallet(req, res, next){
    walletService.chargeWallet(req.body)
    .then((result)=>{
        res.json({
            message:`wallet charge succesfuly`,
            result
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
        res.json({
            message:`wallet pin set succesfully`,
            result
        })
    }).catch(err => next(err))
}

function setWalletPassword(req, res, next){
    walletService.setWalletPassword(req.body)
    .then((result)=>{
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


function getWalletByid(){
    walletService.getAWalletById(req.body)
    .then((result) => {
        res.json({
            message: `wallet retreievd succesfuly`,
            result
        })
    }).catch(err => next(err))
}