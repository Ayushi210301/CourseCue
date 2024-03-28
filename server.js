const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CourseCue', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.json());

// Define Mongoose schema for User
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
     // ... other fields
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Define routes for sign up and sign in
app.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            // Successful sign in
            // Generate a JWT or session token here
            res.status(200).json({ message: 'Sign in successful', user: user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));