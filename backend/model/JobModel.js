const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  primaryskills: {
    type: String,
    required: true,
  },
  requiredskills: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Job', jobSchema);
