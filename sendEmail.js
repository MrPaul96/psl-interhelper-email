const sendGrid = require('@sendgrid/mail');
const apiKey = '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';
sendGrid.setApiKey(apiKey);

function sendEmail(sender, receiver, message){

  const msg = {
    to: receiver,
    from: sender,
    subject: message,
    html: " <img src='./psllogo_navbar.jpeg' align='center'> <strong> Hello bro, you gonna have fun in the interview. - Pablo Villegas PSL XD</strong>"
  };

  sendGrid.send(msg).then(data => console.log(data));

  console.log(msg);

  return false;
}

module.exports = sendEmail;
