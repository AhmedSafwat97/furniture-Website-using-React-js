const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require("./products");
const blogs = require("./blogs");
const ClientReview = require("./ClientReview");
const users = require('./users');

const app = express();
app.use(bodyParser.json());
app.use(cors());


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


app.get("/Review", (req, res) => {
  res.send(ClientReview);
});


// // For Signin and SignUp

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already taken' });
  }

  // Create a new user object
  const newUser = { username, password };
  users.push(newUser);

  return res.status(201).json({ message: 'User created successfully' });
});

// Sign-in route
app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the users array
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  return res.status(200).json({ message: 'Sign in successful' });
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// // Sign-up route
// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the username is already taken
//     const existingUser = await User.findOne({ where: { username } });
//     if (existingUser) {
//       return res.status(409).json({ message: 'Username already taken' });
//     }

//     // Create a new user
//     const newUser = await User.create({ username, password });

//     return res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error('Sign-up error:', error);
//     return res.status(500).json({ message: 'An error occurred during sign-up' });
//   }
// });

// // Sign-in route
// app.post('/signin', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Find the user in the database
//     const user = await User.findOne({ where: { username } });

//     // Check if the user exists and the password matches
//     if (!user || user.password !== password) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }

//     return res.status(200).json({ message: 'Sign in successful' });
//   } catch (error) {
//     console.error('Sign-in error:', error);
//     return res.status(500).json({ message: 'An error occurred during sign-in' });
//   }
// });

// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     console.error('Error retrieving users:', error);
//     res.status(500).json({ message: 'An error occurred while retrieving users' });
//   }
// });



const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));
