const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Swaad_Database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(' Connected to Swaad_Database');
}).catch((err) => {
    console.log(' Error connecting to database', err);
});

// Schema for Contact form
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});
const Contact = mongoose.model('contacts', ContactSchema);

// Schema for Booking form
const BookingDetails = new mongoose.Schema({
    name: String,
    contact: String,
    date: String,
    time: String,
    venue: String,
    guests: String,
    eventType: String,
    packaging: String,
    instructions: String
});
const Booking = mongoose.model('bookings', BookingDetails);

// Schema for Login/Signup
const LoginSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('users', LoginSchema);

// Express setup
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // React frontend URL
}));

// Routes
app.get("/", (req, resp) => {
    resp.send("App is working");
});

// Save contact form
app.post("/contact", async (req, resp) => {
    try {
        const contact = new Contact(req.body);
        let result = await contact.save();
        resp.status(201).send({ message: "Message saved successfully", contact: result });
    } catch (e) {
        resp.status(500).send({ message: "Something went wrong", error: e.message });
    }
});

// Save booking form
app.post("/bookings", async (req, resp) => {
    try {
        const booking = new Booking(req.body);
        let result = await booking.save();
        resp.status(201).send({ message: "Booking saved successfully", booking: result });
    } catch (e) {
        resp.status(500).send({ message: "Something went wrong", error: e.message });
    }
});

// Signup API
app.post("/signup", async (req, resp) => {
   try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(400).send({ message: "Email already in use" });
        }
        const user = new User({ name, email, password });
        let result = await user.save();
        resp.status(201).send({ message: "Signup successful", user: result });
    } catch (e) {
        resp.status(500).send({ message: "Something went wrong", error: e.message });
    }
});

// Login API
app.post("/login", async (req, resp) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password }).select("-password");
        if (user) {
            resp.status(200).send({ message: "Login successful", user });
        } else {
            resp.status(401).send({ message: "Invalid email or password" });
        }
    } catch (e) {
        resp.status(500).send({ message: "Something went wrong", error: e.message });
    }
});

// Start server
app.listen(5000, () => {
    console.log(" App is running on port 5000");
});
