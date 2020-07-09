const mongoose = require('mongoose');
const Schema = mongose.Schema;

const tables = require('./schemas/orderSchema');

const orderSchema = new Schema(tables.schemas);

const Order = mongoose.model('order', cardSchema);


module.exports = Order;