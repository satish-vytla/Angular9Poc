const express = require('express');
const app = express();
const countryinfoRoutes = express.Router();

// Require Product model in our routes module
let CountryInfo = require('../models/Country');

// Defined store route
countryinfoRoutes.route('/add').post(function (req, res) {
    console.log('your in post api');
    let countryInfo = new CountryInfo(req.body);
    countryInfo.save()
      .then(product => {
        res.status(200).json({'Country': 'Country has been added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

  // Defined get data(index or listing) route
  countryinfoRoutes.route('/').get(function (req, res) {
      console.log('We are in country api');
    CountryInfo.find(function (err, countryInfos){
      if(err){
        console.log(err);
      }
      else {
        res.json(countryInfos);
      }
    });
  });



  module.exports = countryinfoRoutes;
