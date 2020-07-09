const mongoose = require('mongoose');
const Schema = mongose.Schema;

const tables = require('./schemas/adminSchema');

const adminSchema = new Schema(tables.schemas);

const Admin = mongoose.model('admin', adminSchema);


module.exports = Admin;