const getTransport = require('../../helpers/transport');
const getToken = require('../../helpers/token');

const sendEmail = (req , res ) => {

    const transport = getTransport();
    const token  = getToken();

    host=req.get('host');
    link="http://"+req.get('host')+"/verify/"+token+"/"+req.body.receiver+"";

    user = req.body.name;

    mailOptions={
      to : req.body.receiver,
      subject : "Interview to work at PSL ",
      html : "Hello "+ user +" <br> Please Click on the following link to confirm assitance to the interview .<br><a href="+link+">Link</a>"
    };

    console.log(mailOptions);

    transport.sendMail(mailOptions, (error, response) => {
      console.log('what');
      if(error) {
        res.end('error');
      }
      else {
        res.end('email sent');
      }
    });
};

module.exports = sendEmail;
