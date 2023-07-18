const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require("./products");
const blogs = require("./blogs");
const ClientReview = require("./ClientReview");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('./Users');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());
app.use(cors());


// Connect to MongoDB database
mongoose.connect('mongodb+srv://AhmedSafwat:1234@cluster0.esarx0c.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Define the User schema
const userSchema = new mongoose.Schema({
  UserName: String,
  password: String,
  firstName: String,
  lastName: String,
  Email: String,
  Phone: String,
  Country: String,
  Town: String,
  address: String,
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

// Secret key used to sign and verify the JWT
const secretKey =  'your-secret-key' ;


app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});


app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const oneProduct = products.find((item) => {
    return item.id == req.params.id;
  });
  res.send(oneProduct);
});


app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/blogs/:id", (req, res) => {
  const oneblogs = blogs.find((item) => {
    return item.id == req.params.id;
  });
  res.send(oneblogs);
});


app.get("/blogs/comments/:id", (req, res) => {
  const oneblogs = blogs.find((item) => {
    return item.id == req.params.id;
  });
  res.send(oneblogs.comments);
});

app.get("/Review", (req, res) => {
  res.send(ClientReview);
});

app.post('/signup', async (req, res) => {
  const {
    UserName,
    Password,
    firstName,
    LastName,
    Email,
    Phone,
    Country,
    Town,
    address,
  } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ UserName });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(Password, 10);

    // Create a new user instance
    const newUser = new User({
      UserName,
      password: hashedPassword,
      firstName,
      LastName,
      Email,
      Phone,
      Country,
      Town,
      address,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Convert the Mongoose model instance to a plain object
    const userObject = savedUser.toObject();

    // Generate JWT token
    const token = jwt.sign(userObject, secretKey);

    // Send the token in the response
    res.json({ token });
  } catch (error) {
    console.error('Error saving user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/signin', async (req, res) => {
  const { UserName, Password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ UserName });
    if (!user) {
      return res.status(401).json({ message: 'Invalid UserName' });
    }

    // Compare the password
    const isPasswordValid = bcrypt.compareSync(Password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    // Generate JWT token
    const token = jwt.sign(user.toObject(), secretKey);

    // Send the token in the response
    res.json({ token });
  } catch (error) {
    console.error('Error during sign-in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/users', (req, res) => {
  res.status(200).json(users);
});


const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));













