/*
index.js
Shyla Grantmyre
Portfolio Site
This file is for the routes on the website
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about page*/
router.get('/about', function(req, res, next){
  res.render('about');
});

/* GET projects page*/
router.get('/projects', function(req, res, next){
  res.render('projects');
});

/* GET services page*/
router.get('/services', function(req, res, next){
  res.render('services');
});

/* GET contact page*/
router.get('/contact', function(req, res, next){
  res.render('contact');
});



module.exports = router;
