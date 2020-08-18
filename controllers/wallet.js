const config = require('../config/constants');
const walletService = require('../services/walletServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Wallet = require("../models/walletModel");
const { rawListeners } = require('../models/walletModel');

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

function create(res, req, next){
   walletService.creatWallet(req.body)
   .then((result)=>{
       res.json({
           message : `${req.body.firstname} , your wallet was created succesffully`
       })
   })
   .catch((err)=>{
       next(err)
   })
}

function getAcctNum(res, req, next){
    walletService.generateAcctNumber(req.body)
    .then((result)=>{
        res.json({
            message:`succcesfully genarated account number .....`
        })
    })
    .catch((err)=>{
        next(err)
    })
}


function verifyBVN(res, req, next){
    walletService.verifyBvn(req.body)
    .then((result)=>{
         res.json({
             message: `your bvn was verififed succesfully`
         })
    }).catch(err => next(err))
}

function creditWallet(){
    walletService.creditWallet(req.body)
    .then((result)=> {
        res.json({
            message:`wallet credited with ...... succesfully`
        })
    }).catch(err => next(err))
}

function chargeWallet(){
    walletService.chargeWallet(req.body)
    .then((result)=>{
        res.json({
            message:`wallet charge succesfuly`
        })
    }).catch(err => next(err))
}

function getWalletBalance(){
    walletService.getWalletBalance(req.body)
    .then((result)=>{
        res.json({
            message:`wallet balance retrieved succesfuly`
        })
    }).catch(err => next(err))
}

function setWalletPin(){
    walletService.setWalletPin(req.body)
    .then((result)=>{
        res.json({
            message:`wallet pin set succesfully`
        })
    })
}

function setWalletPassword(){
    walletService.setWalletPassword(req.body)
    .then((result)=>{
        res.json({
            message: `wallet password set succesfully`
        })
    }).catch(err => next(err))
}

function getWalletTransactions(){
    walletService.getWalletTransactions(req.body)
    .then((result)=>{
       res.json({
           message:`all transactions retrieved`
       })
    }).catch(err => next(err))
}

function transferFromWalletToBank(){
    walletService.transferFromWalletToBank(req.body)
    .then((result)=>{

    }).catch(err => next(err))
}