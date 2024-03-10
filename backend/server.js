const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoURI = 'mongodb://localhost:27017';
const dbName = 'yourDatabaseName';

MongoClient.connect(mongoURI, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    app.post('/submitForm', (req, res) => {
      const formData = req.body;
      
      db.collection('applications').insertOne(formData, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Failed to submit form');
          return;
        }
        console.log('Form submitted successfully');
        res.status(200).send('Form submitted successfully');
      });
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
