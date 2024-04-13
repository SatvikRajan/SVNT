const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 50
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        max: 10
    },
    totalExperience: {
        type: Number,
        required: true,
        min: 0
    },
    relevantExperience: {
        type: Number,
        required: true,
        min: 0
    },
    resume: {
        type: String, 
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Candidate", CandidateSchema);
