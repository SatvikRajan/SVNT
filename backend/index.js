const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('../backend/routes/UserRoutes');
require("dotenv").config();
app.use(cors())
app.use(express.json());
app.use("/api/auth", userRoutes);

async function main() {
    try {
        await mongoose.connect('mongodb+srv://satvikrajan:Satvik2003@cluster0.lowxabl.mongodb.net/svnt?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

main().catch((err) => {
    console.log(err);
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
