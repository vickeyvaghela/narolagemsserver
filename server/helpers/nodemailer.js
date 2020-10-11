var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PWD
    }
});



function sendSingle(mailOptions)    {
    //console.log('mailOptions ',mailOptions);

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent to : ' + mailOptions.to);
        }
        return;
    });
}

function sendMulti(emailAry) {
    console.log('sendMulti Function');
}

function sendAttachment(mailOptions,attachUrl) {
    console.log('sendAttachment Function');

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent to : ' + mailOptions.to);
        }
        return;
    });
}

function sendAttachmentMulti(emailAry,attachUrl) {
    console.log('sendAttachmentMulti Function');
}

function sendHtml(email,HtmlPath,templateData,subject)    {



    var path = require('path');
    var fs = require('fs');
    var handlebars = require('handlebars');



    fs.readFile(path.join(__dirname, HtmlPath), {encoding: 'utf-8'}, function (err, html) {

        if(!err){

            var template = handlebars.compile(html);
            var result = template(templateData);


            var mailOptions = { from: 'test@gmail.com', to: email, subject: subject, html: result};
            transporter.sendMail(mailOptions, function(error, info){
                if (error) { console.log(error); } else { console.log('Email sent: ' + info.response); }
            });
        }else{
            console.log(err);
        }

    });

}

module.exports = {sendSingle, sendMulti, sendAttachment, sendAttachmentMulti,sendHtml};