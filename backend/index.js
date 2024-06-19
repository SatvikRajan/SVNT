const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
const adminRoutes = require('../backend/routes/AdminRoutes');
const candidateRoutes = require('./routes/CandidateRoutes');
const jobRoutes = require('./routes/JobRoutes');
const Candidate = require('./model/CandidatesModel');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
app.use("/api/auth", adminRoutes)
app.use('/api/candidates', candidateRoutes)
app.use('/admin/api/jobs', jobRoutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const mongoURI = 'mongodb+srv://satvikrajan:Satvik2003@cluster0.3sgwwvu.mongodb.net/svnt?retryWrites=true&w=majority&appName=Cluster0';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

const upload = multer({ storage });
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'satvikrajan@gmail.com',
        pass: 'cwlx qmia fpco ifij',
    },
});

app.post('/send-email', (req, res) => {
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
    if (!phoneNumber && !validatePhone(phoneNumber)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }

    const mailOptions = {
        from: `"${senderName}" <${senderEmail}>`,
        to: 'satvikrajan@gmail.com',
        subject: subject,
        text: `Sender: ${senderName} <${senderEmail}>\n\n${text}\nPhone Number: ${phoneNumber}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error sending email' });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
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

app.get('/candidates', async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.status(200).json(candidates);
    } catch (error) {
        console.error('Error fetching candidates:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.post('/careers/api/submitForm', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, phone, totalExperience, relevantExperience } = req.body;
        const resumePath = req.file ? req.file.path : null;

        const candidate = new Candidate({
            name,
            email,
            phone,
            totalExperience,
            relevantExperience,
            resumePath,
        });

        await candidate.save();
        res.status(201).json({ message: 'Candidate saved successfully' });
    } catch (error) {
        console.error('Error saving candidate:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.delete('/api/candidates/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const candidate = await Candidate.findByIdAndDelete(id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }
        res.json({ message: 'Candidate deleted successfully' });
    } catch (error) {
        console.error('Error deleting candidate:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/resume/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.params.filename);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).json({ message: 'File not found' });
    }
});


async function main() {
    try {
        await mongoose.connect(mongoURI, {});
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
