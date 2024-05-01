const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('../backend/routes/UserRoutes');
const candidateRoutes = require('./routes/CandidateRoutes')
const Candidate = require('./model/CandidatesModel');
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use('/api/candidates', candidateRoutes)

app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'satvikrajan@gmail.com',
        pass: 'cwlx qmia fpco ifij'
    }
});


app.post('/send-email', (req, res) => {
    const { senderName, senderEmail, subject, text, phoneNumber } = req.body;

    if (senderName.length < 4) {
        return res.status(400).json({ error: "Name should be greater than 3 charactors" })
    }
    if (!senderName) {
        return res.status(400).json({ error: 'Sender name is required' });
    }
    if (!subject || !text) {
        return res.status(400).json({ error: 'Subject and text is required' });
    }

    if (!senderEmail || !validateEmail(senderEmail)) {
        return res.status(400).json({ error: 'Invalid sender email' });
    }

    if (!phoneNumber && !validatePhone(phoneNumber)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }

    const mailOptions = {
        from: `"${senderName}" <${senderEmail}>`,
        to: 'satvikrajan@gmail.com',
        subject: subject,
        text: `Sender: ${senderName} <${senderEmail}>\n\n${text}  \n Phone Number : ${phoneNumber}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (senderName.length < 4) {
            return res.status(400).json({ error: "Name should be greater than 3 charactors" })
        }
        else if (!senderName) {
            return res.status(400).json({ error: 'Sender name is required' });
        }
        else if (!subject || !text) {
            return res.status(400).json({ error: 'Subject and text is required' });
        }
    
        else if (!senderEmail || !validateEmail(senderEmail)) {
            return res.status(400).json({ error: 'Invalid sender email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

app.post('/careers/api/submitForm', async (req, res) => {
    try {
        const { name, email, phone, totalExperience, relevantExperience, resume } = req.body;
        console.log(req.body);
        const candidate = new Candidate({ name, email, phone, totalExperience, relevantExperience, resume });
        await candidate.save();
        res.status(201).json({ message: 'Candidate saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

async function main() {
    try {
        await mongoose.connect('mongodb+srv://satvikrajan:Satvik2003@cluster0.3sgwwvu.mongodb.net/svnt?retryWrites=true&w=majority&appName=Cluster0', {
        });
        console.log('DB connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

main().catch((err) => {
    console.log(err);
});

const server = app.listen(8080, () => {
    console.log(`Example app listening on port 8080`);
});

