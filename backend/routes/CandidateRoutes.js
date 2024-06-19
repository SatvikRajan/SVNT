const express = require('express');
const Candidate = require('../model/CandidatesModel');

const router = express.Router();
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


module.exports = router;
