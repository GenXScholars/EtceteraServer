const rsultCheckerService = require("../services/rsultCheckerServices");
const transactions = require("../services/notifications/billsMail");

function checkresult(req, res, next){
    rsultCheckerService.CheckResult(req.body)
    .then((result)=>{
        const data = result.data.Data;
        // transactions.sendDebitTransaction(data);
        res.json({
            message:`boooom your result was retrieved succesfully`,
            data
        })
    }).catch(err => next(err))
}

function getOurBalance(req, res, next){
    rsultCheckerService.fetchDealerBalance(req.body)
    .then((result)=>{
        res.json({
            message:`balance retrieved succesfuly`,
            result
        })
    }).catch(err => next(err))
}





module.exports = {
    checkresult,
    getOurBalance, 
    
}