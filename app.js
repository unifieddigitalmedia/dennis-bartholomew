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
