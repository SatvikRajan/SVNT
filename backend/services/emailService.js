const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'satvikrajan@gmail.com',
        pass: 'cwlx qmia fpco ifij',
    },
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

async function sendEmail(req, res) {
    const { senderName, senderEmail, subject, text, phoneNumber } = req.body;

    if (senderName.length < 4) {
        return res.status(400).json({ error: "Name should be greater than 3 characters" });
    }
    if (!senderName) {
        return res.status(400).json({ error: 'Sender name is required' });
    }
    if (!subject || !text) {
        return res.status(400).json({ error: 'Subject and text are required' });
    }
    if (!senderEmail || !validateEmail(senderEmail)) {
        return res.status(400).json({ error: 'Invalid sender email' });
    }
    if (!phoneNumber || !validatePhone(phoneNumber)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }

    const mailOptions = {
        from: `"${senderName}" <${senderEmail}>`,
        to: 'satvikrajan@gmail.com',
        subject: subject,
        text: `Sender: ${senderName} <${senderEmail}>\n\n${text}\nPhone Number: ${phoneNumber}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error sending email' });
    }
}

module.exports = {
    sendEmail,
};
