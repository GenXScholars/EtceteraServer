const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const tables = require('./schemas/merchantSchema');

const merchantSchema = new Schema(tables.schemas);

merchantSchema.plugin(uniqueValidator, { message :'Error, {PATH} must be unique'});

const Merchant = mongoose.model('card', merchantSchema);


module.exports = Merchant;