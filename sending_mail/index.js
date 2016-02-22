var nodemailer = require('nodemailer');

var smtpConfig = {
    //host: 'smtp.gmail.com',
    host: 'cp-in-8.webhostbox.net',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'ravi@mkonn.com',
        pass: //'Ram#12345'
    }
};

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'ravisikander88@gmail.com', // sender address
    to: 'ravi.k.yadav108@gmail.com', // list of receivers
    subject: 'Hello', // Subject line
    //text: 'Hello world !!!', // plaintext body
    html: '<b>Hello world </b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
