const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const schema = new Schema({
    city: {type: String, index: true}, //城市
    singleCustomer: {type: Number, index: true},
    totalCustomer: {type: Number},
    totalStream:{type:Number},
    month5G:{type:String},
    month5GVal:{type:String},
    daily5G:{type:String},
    daily5GVal:{type:String},
    createdAt: {type: Date, index: true, default: new Date()},
    updatedAt: {type: Date, index: true, default: new Date().toString()},
});

module.exports = model('list', schema);