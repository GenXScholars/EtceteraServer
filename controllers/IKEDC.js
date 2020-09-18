const IKEDCService = require("../services/IKEDCServices");
const transactions = require("../services/notifications/billsMail");
const bcrypt = require("bcryptjs");

function getAccountDetails(req, res, next){
    IKEDCService.FetchCust(req.body)
    .then((result)=>{
        const data = result.data.Data;
        // transactions.sendDebitTransaction(data);
        res.json({
            message:`your details was retrieved succesfully`,
            data
        })
    }).catch(err => next(err))
}

function getOurBalance(req, res, next){
    IKEDCService.getDealerBalance(req.body)
    .then((result)=>{
        res.json({
            message:`IKEDC balance retrieved succesfuly`,
            result
        })
    }).catch(err => next(err))
}

function getAllTransactionDetail(req, res, next){
    IKEDCService.FetchUsage(req.body)
    .then((result)=>{
        res.json({
            message:`All transctions retrieved succesfully`,
            result
        })
    }).catch(err => next(err))
}

function rechargeMeter(req, res, next){
    //  note (1= prepaid, 0= postpaid)
    IKEDCService.PostTransaction(req.body)
    .then((result)=>{
       res.json({
           message:`IKEDC bill purchased succesfully`,
           result
       })
    }).catch(err => next(err))
}

// function getSingleTransactionDetail(req, res, next){
//     IKEDCService.FetchTnxByRef(req.body)
//     .then((result) => {
//         res.json({
//             message: `trabsaction with ref id... was retrieved succesfully`,
//             result
//         })
         
//     })
//     .catch(err => next(err))
// }

module.exports = {
    getAccountDetails, 
    getOurBalance, 
    getAllTransactionDetail,
    rechargeMeter
}