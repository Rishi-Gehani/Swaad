// backend/index.js

const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Swaad_Database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Connected to Swaad_Database');
}).catch((err) => {
    console.log('❌ Error connecting to database', err);
});

// Schema for Contact form
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

// Create a collection "contacts"
const Contact = mongoose.model('contacts', ContactSchema);

// Express setup
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // React frontend URL
}));

// Sample route
app.get("/", (req, resp) => {
    resp.send("App is working");
});

// API to save contact form data
app.post("/contact", async (req, resp) => {
    try {
        const contact = new Contact(req.body);
        let result = await contact.save();
        resp.status(201).send({
            message: "Message saved successfully",
            contact: result
        });
    } catch (e) {
        resp.status(404).send({ message: "Something went wrong", error: e.message });
    }
});

// Start the server
app.listen(5000, () => {
    console.log("🚀 App is running on port 5000");
});
