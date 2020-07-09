const mongoose = require('mongoose');
const Schema = mongose.Schema;

const tables = require('./schemas/walletSchema');

const walletSchema = new Schema(tables.schemas);

const Wallet = mongoose.model('wallet', walletSchema);

module.exports = Wallet;