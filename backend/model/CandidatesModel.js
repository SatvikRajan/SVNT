const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 50,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    totalExperience: {
        type: String,
        required: true,
    },
    relevantExperience: {
        type: String,
        required: true,
    },
    resumePath: String,
});

module.exports = mongoose.model("Candidate", CandidateSchema);
