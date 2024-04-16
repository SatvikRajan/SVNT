
const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/CandidateControllers');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads') 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
router.post('/candidates', upload.single('resume'), candidateController.createCandidate);

module.exports = router;
