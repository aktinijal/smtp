var express = require('express');
var mail = require('../mail/mail');
var router = express.Router();

router.post('/', function(req, res, next) { 
    //TODO: req.body.email set to recipient address
    //TODO: req.body.data set to html content

    var mailOptions = {
        from: 'aktinijal.com', 
        to: 'grytsenko.kate.ua@gmail.com', // can be comma separated
        subject: 'Test', 
        html: '<b>This is a test email</b>'
    };

    mail.sendMail(mailOptions, function(error, info) {
        if(error){
            return console.log(error);
        }
        res.status(200).json({message: info.response});
    });
});

module.exports = router;
