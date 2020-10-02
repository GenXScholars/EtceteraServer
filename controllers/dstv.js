const DSTVService = require("../services/dstvServices");
const transactions = require("../services/notifications/billsMail");
const debug = require("debug")("app:DSTVControllers");

function recharge(req, res, next){
    DSTVService.rechargeOneTime(req.body)
    .then((result)=>{
        debug("DSTV RECHARGE DATA: " + " "+ result);
        const data = result.data.Data;
        // transactions.sendDebitTransaction(data);
        res.json({
            message:"you have recharged your dstv succesfully",
            data
        })
    }).catch(err => next(err))
}

function  rechargeBulk(req, res, next){
    DSTVService.rechargeBulk(req.body)
    .then((result)=>{
        debug("DSTV BULK DATA :" + " " + result);
        res.json({
            message:"Your bulk recharge waws succesful",
            result
        })
    }).catch(err => next(err))
}

function getSingleTransaction(req, res, next){
    //  note (1= prepaid, 0= postpaid)
      DSTVService.getSingleTransaction(req.body)
    .then((result)=>{
        debug("single transaction DATA" + " " + result);
       res.json({
           message:"Your single transaction data was retrieved succesfully",
           result
       })
    }).catch(err => next(err))
}

function getMonthlyRecharge(req, res, next){
    DSTVService.getMonthlyRecharge(req.body)
    .then((result) => {
        debug("Monthly recharge DATA" + " " + result);
        res.json({
            message: "Your monthly recharge was successful",
            result
        })
         
    })
    .catch(err => next(err))
}

function getAmountForAProduct(req, res, next){
    DSTVService.getAmountForAProduct(req.body)
    .then((result) => {
        debug("Amount for a product DATA" + " " + result);
        res.json({
            message: "The amount for a product was succesfully retrieved",
            result
        })
         
    })
    .catch(err => next(err))
}

function  validate(req, res, next){
    DSTVService.validate(req.body)
    .then((result) => {
        debug("Validate DATA" + " " + result);
        res.json({
            message: "Your smart card number was validated succesfully",
            result
        })
         
    })
    .catch(err => next(err))
}
module.exports = {
    recharge,
    rechargeBulk,
    getSingleTransaction,
    getMonthlyRecharge,
    getAmountForAProduct,
    validate
  };