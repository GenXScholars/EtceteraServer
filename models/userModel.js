const mongoose = require('mongoose');
const Schema = mongose.Schema;

const tables = require('./schemas/userSchema');

const userSchema = new Schema(tables.schemas);

const User = mongoose.model('user', userSchema);


module.exports = User;