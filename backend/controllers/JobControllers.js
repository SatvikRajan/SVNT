const Job = require('../model/JobModel');

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new job
exports.createJob = async (req, res) => {
  const { title, employmentType, experience, primaryskills, requiredskills } = req.body;

  const job = new Job({
    title,
    employmentType,
    experience,
    primaryskills,
    requiredskills,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing job
exports.updateJob = async (req, res) => {
  const { title, employmentType, experience, primaryskills, requiredskills } = req.body;

  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (title) job.title = title;
    if (employmentType) job.employmentType = employmentType;
    if (experience) job.experience = experience;
    if (primaryskills) job.primaryskills = primaryskills;
    if (requiredskills) job.requiredskills = requiredskills;

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    await job.remove();
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
