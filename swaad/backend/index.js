const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
require('dotenv').config();

const app = express();

const whitelist = ['http://localhost:3000', 'https://swaad.vercel.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to Swaad_Database');
}).catch((err) => {
    console.log('Error connecting to database', err);
});
// Schemas
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});
const Contact = mongoose.model('contacts', ContactSchema);

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

const LoginSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('users', LoginSchema);

const OrderSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    items: [
        {
            name: String,
            quantity: Number,
            price: Number
        }
    ],
    total: Number,
    orderId: { type: String, default: () => "SWAAD-" + Date.now() },
    date: { type: Date, default: Date.now }
});
const Order = mongoose.model('orders', OrderSchema);

app.get("/", (req, resp) => resp.send("App is working"));

// Contact form
app.post("/contact", async (req, resp) => {
    try {
        const contact = new Contact(req.body);
        let result = await contact.save();
        resp.status(201).send({ message: "Message saved successfully", contact: result });
    } catch (e) {
        resp.status(404).send({ message: e.message });
    }
});

// Booking form
app.post("/bookings", async (req, resp) => {
    try {
        const booking = new Booking(req.body);
        let result = await booking.save();
        resp.status(201).send({ message: "Booking saved successfully", booking: result });
    } catch (e) {
        resp.status(404).send({ message: e.message });
    }
});

// Signup
app.post("/signup", async (req, resp) => {
   try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(404).send({ message: "Email already in use" });
        }
        const user = new User({ name, email, password });
        let result = await user.save();
        resp.status(201).send({ message: "Signup successful", user: result });
    } catch (e) {
        resp.status(404).send({ message: e.message });
    }
});

// Login
app.post("/login", async (req, resp) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password }).select("-password");
        if (user) {
            resp.status(200).send({ message: "Login successful", user });
        } else {
            resp.status(404).send({ message: "Invalid email or password" });
        }
    } catch (e) {
        resp.status(404).send({ message: e.message });
    }
});

// Save order
app.post("/orders", async (req, resp) => {
    try {
        const order = new Order(req.body);
        let result = await order.save();
        resp.status(201).send({ message: "Order saved successfully", order: result });
    } catch (e) {
        resp.status(404).send({ message: e.message });
    }
});

// Order history
app.get("/orders/:email", async (req, resp) => {
    try {
        const orders = await Order.find({ userEmail: req.params.email });
        resp.status(200).send(orders);
    } catch (e) {
        resp.status(404).send({ message: e.message });
    }
});

app.listen(5000, () => {
    console.log("App is running on port 5000");
});
