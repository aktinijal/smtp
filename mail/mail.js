var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'factorly.ua@gmail.com', //email account name
        pass: 'yvxjerbhnopdbceb' //your pass
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

module.exports = transporter;