const express = require('express');
const cors = require('cors')
const app = express(); // Create a object of express module.
const bodyParser = require('body-parser');
require('dotenv/config');

//Services.
const email = require('./services/email');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    code: 200,
    app: 'PSL - Interhelper',
    message: 'We are alive'
  });
});


app.use('/email', email );

app.listen(3000, ()=> {
  console.log(`Email service listening on port ${process.env.PORT} ! `);
});
