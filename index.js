var express = require('express');
var app = express();
var apiSecret = 'm0MrXYcx4EA47oaqPfs8JzWcegxas6V1';

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  
    // Process request and return appropriate
  var nonce = request.url.substring(1);
  var processed = crypto.createHmac('SHA256', apiSecret).update(nonce).digest('base64');
  response.end(processed);


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


