const mongoose = require('mongoose');
const Schema = mongose.Schema;

const tables = require('./schemas/cardsSchema');

const cardSchema = new Schema(tables.schemas);

const Card = mongoose.model('card', cardSchema);


module.exports = Card;