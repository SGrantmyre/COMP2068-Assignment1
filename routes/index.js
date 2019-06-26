/*
index.js
Shyla Grantmyre
Portfolio Site
This file is for the routes on the website
*/

var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

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

/*POST contact form */
router.post('/send', async (req, res)=>{
  const output = `
  <p>New contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
  </ul>
  <h3>Message: </h3>
  <p>${req.body.message}</p>
  `;
  send(output).catch(console.error);
  res.render('contact', {messageSent: 'Message Sent' });
  
});

async function send (output){
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, 
    auth: {
      user: 'sgrantmyre@outlook.com', 
      pass: '8sJjMagRWK6yKtY'
    },
    tls:{
      rejectunauthorized:false
    }
  });

  
  let info = await transporter.sendMail({
    from: '"Contact" <sgrantmyre@outlook.com>', 
    to: "200379257@student.georgianc.on.ca", 
    subject: "Contact request", 
    html: output 

  });

 

}




module.exports = router;
