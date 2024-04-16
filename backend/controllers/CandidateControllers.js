const Candidate = require('../model/CandidatesModel');
module.exports.createCandidate = async (req, res) => {
    try {
        const { name, email, phoneNumber, totalExperience, relevantExperience } = req.body;
        const resume = req.file.path;

        const candidate = new Candidate({
            name,
            email,
            phoneNumber,
            totalExperience,
            relevantExperience,
            resume
        });

        await candidate.save();
        res.status(201).json({ message: 'Candidate created successfully', candidate });
    } catch (error) {
        console.error('Error creating candidate:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
