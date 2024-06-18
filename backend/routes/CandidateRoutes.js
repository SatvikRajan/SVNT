const express = require('express');
const Candidate = require('../model/CandidatesModel');
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

const upload = multer({ storage });
// Get all candidates
router.get('/candidates', async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.status(200).json(candidates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
router.post('/careers/api/submitForm', upload.single('resume'), async (req, res) => {
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
router.get('/resume/:filename', (req, res) => {
    const filePath = path.join(__dirname, '..', 'uploads', req.params.filename);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).json({ message: 'File not found' });
    }
});

// Delete a candidate by ID
router.delete('/candidates/:id', async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        await candidate.remove();
        res.status(200).json({ message: 'Candidate deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
