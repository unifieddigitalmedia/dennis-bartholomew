var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression')
var app = express();
app.use(compression());
app.use(express.static('public'));

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {

      res.sendFile(path.join(__dirname + "/index.html"));

      })


app.use(express.static('bower_components'));

var nodemailer = require('nodemailer');


app.get('/api/contact', function (req, res) {

 



      var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'machelslack@hotmail.com', 
            pass: '321123ETz@'
        }

    });

var message = "<p>Hello Dennis, </p> <p> You have a new Inquiry </p><p>FIRM: "+req.query.firm+"</p><p>CONTACT: "+req.query.name+"</p><p>PHONE: "+req.query.phone+"</p><p>EMAIL: "+req.query.email+"</p><p>WEBSITE: "+req.query.webiste+"</p><p>MESSAGE: "+req.query.message+"</p>";




var mailOptions = {

    from:req.query.email,
    to:"dennisbartholomew2003@yahoo.co.uk",
    subject:"New Inquiry", 
    text: message,
    html: message, 
   
};

transporter.sendMail(mailOptions, function(error, info){

    if(error){

		var response = {"ERROR":error};
        
       res.json(response);

        return console.log(error);
    }
    


       var response = {"ERROR":"Your message has been sent and some will contact you shortly"};
        
       res.json(response);

});



      })







// production error handler
// no stacktraces leaked to user
/*app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

module.exports = app;
