

const { createTransport } = require('nodemailer');

const transporter = createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
        user: "test",
        pass: "xsmtpsib-8134bd771a91f9157ceaa8a927d0bf5b3d1fce52a08d392792020acb6be761ca-dnX06YJq5M4v9OTt",
    },
});

const mailOptions = {
    from: 'test',
    to: '<your-receiver>',
    subject: `Your subject`,
    text: `Your text content`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});