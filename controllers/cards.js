const cardsServices = require("../services/creditCardsServices");


 function create(req, res, next) {
    cardsServices.createNewCard(req.body)
    .then((card) => {
        res.json({
            message : `Card created successfully`,
            card
        })
    }).catch(err => next(err))
}

 function getByCardId(req, res, next){
     cardsServices.getByCardId(req.body)
     .then((card) => {
         res.json({
             message:`Card with card name ${req.body.CardHoldername} was retrieved`,
             card
         })
     }).catch(err => next(err))
 }

 function getAllCreditCards(req, res, next){
     cardsServices.getAllCards(req.body)
     .then((cards)=> {
        res.json({
            message:`All credit cards retrieved succesfully`,
            cards
        })
     }).catch(err => next(err))
 }

 function updateCardInfo(req, res, next){
    cardsServices.updateCard(req.body)
    .then((card)=> {
       res.json({
           message:`Credit card updated succesfully`
       })
    }).catch(err => next(err))
}

function deleteCard(req, res, next){
    cardsServices._delete(req.body)
    .then((card)=> {
       res.json({
           message:`Credit card with card name ${req.body.CardHoldername} was deleted`
       })
    }).catch(err => next(err))
}

module.exports = {
    create,
    getByCardId,
    getAllCreditCards,
    updateCardInfo,
    deleteCard
}