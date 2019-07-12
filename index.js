const express = require('express');
const cors = require('cors')
const app = express(); // Create a object of express module.
const bodyParser = require('body-parser');

//Functions
const sendEmail = require('./sendEmail');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('I am alive');
});

app.post('/sendEmail', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const result = {
    message: 'Email received'
  };

  const validation = sendEmail(req.body.sender, req.body.receiver, req.body.message);

  console.log(validation);

  res.end(JSON.stringify(result));
});

app.listen(3000, ()=> {
  console.log('Email service listening on port 3000 ! ');
});
