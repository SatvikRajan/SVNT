const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('../backend/routes/UserRoutes');
const candidateRoutes = require('./routes/CandidateRoutes')
require("dotenv").config();
app.use(cors())
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use('/api/candidates', candidateRoutes)
app.post('/api/submitForm', async (req, res) => {
    try {
        const { name, email, phone, totalExperience, relevantExperience, resume } = req.body;
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
