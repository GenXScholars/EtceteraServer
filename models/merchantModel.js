const mongoose = require('mongoose');
const Schema = mongose.Schema;

const tables = require('./schemas/merchantSchema');

const merchantSchema = new Schema(tables.schemas);

const Merchant = mongoose.model('card', merchantSchema);


module.exports = Merchant;