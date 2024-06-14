const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const path = require('path');
const crypto = require('crypto');

const app = express();

const adminRoutes = require('../backend/routes/AdminRoutes');
const candidateRoutes = require('./routes/CandidateRoutes');
const Candidate = require('./model/CandidatesModel');
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use("/api/auth", adminRoutes);
app.use('/api/candidates', candidateRoutes);

app.use(bodyParser.json());


const mongoURI = 'mongodb+srv://satvikrajan:Satvik2003@cluster0.3sgwwvu.mongodb.net/svnt?retryWrites=true&w=majority&appName=Cluster0';


const conn = mongoose.createConnection(mongoURI, {
});

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('resumes');
});


const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'resumes',
                };
                resolve(fileInfo);
            });
        });
    },
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

app.post('/careers/api/submitForm', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, phone, totalExperience, relevantExperience } = req.body;
        const resumeFileId = req.file.id;

        const candidate = new Candidate({
            name,
            email,
            phone,
            totalExperience,
            relevantExperience,
            resume: resumeFileId
        });

        await candidate.save();
        res.status(201).json({ message: 'Candidate saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/resume/:filename', async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });

        if (!file) {
            return res.status(404).json({ err: 'No file exists' });
        }

        if (file.contentType === 'application/pdf') {
            const readstream = gfs.createReadStream(file.filename);
            res.set('Content-Type', 'application/pdf');
            return readstream.pipe(res);
        } else {
            return res.status(400).json({ err: 'Not a PDF' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Server error' });
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
