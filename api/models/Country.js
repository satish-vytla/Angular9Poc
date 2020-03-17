// Country.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let CountryInfo = new Schema({
  CountryName: {
    type: String
  },
 
  State: {
    type: String
  },
  Location: {
    type: String
  },
  Season: {
    type: String
  },
  EnterMessage: {
    type: String
  },
  ZipCode: {
    type: Number
  },
  Date: {
    type: Date
  }
},{
    collection: 'countries'
});

module.exports = mongoose.model('countries', CountryInfo);