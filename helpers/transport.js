require('dotenv/config');
const nodemailer = require('nodemailer');

const getTransport = function(){

  var transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: process.env.user,
        pass: process.env.password
    }
  });

  return transport;
};

module.exports = getTransport;
