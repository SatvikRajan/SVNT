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
    phone: {
        type: String,
        required: true,
        trim: true,
        min: 0
    },
    totalExperience: {
        type: String,
        required: true,
        min: 0
    },
    relevantExperience: {
        type: String,
        required: true,
        min: 0
    },
    resume: { type: mongoose.Schema.Types.ObjectId, ref: 'resumes.files', required: true }

});

module.exports = mongoose.model("Candidate", CandidateSchema);
