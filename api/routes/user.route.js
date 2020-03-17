// User.route.js

const express = require('express');
const app = express();
const userinfoRoutes = express.Router();

// Require USer model in our routes module
let UserInfo = require('../models/User');

// Defined store route
userinfoRoutes.route('/add').post(function (req, res) {
  console.log('your in post api');
  let userinfo = new UserInfo(req.body);
  userinfo.save()
    .then(product => {
      res.status(200).json({'User': 'Product has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userinfoRoutes.route('/').get(function (req, res) {
  UserInfo.find(function (err, userinfos){
    if(err){
      console.log(err);
    }
    else {
      res.json(userinfos);
    }
  });
});

// Defined edit route
/* productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product){
      res.json(product);
  });
});

//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("Record not found");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;

      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}); */

module.exports = userinfoRoutes;