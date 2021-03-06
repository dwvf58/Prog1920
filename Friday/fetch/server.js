const express = require('express');

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('client'));

let instruments = [ 'piano', 'concertina', 'double bass'];

app.get('/instrument', function (req, resp){
    resp.send(instruments);
});

app.post('/instrument/new', function (req,resp){
  const type = req.body.instrument_type;
  console.log("instrument is " + type);
  resp.send("instrument is " + type);
});


app.listen(8090);
