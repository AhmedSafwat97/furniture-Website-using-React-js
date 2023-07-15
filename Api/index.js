const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const products = require("./products");
const blogs = require("./blogs");
const ClientReview = require("./ClientReview");
const jwt = require('jsonwebtoken');
const fs = require('fs');
require('crypto').randomBytes(35).toString("hex")


const users = require('./Users');

const app = express();
app.use(bodyParser.json());
app.use(cors());
 
// Secret key used to sign and verify the JWT
const secretKey = 'your-secret-key';


// // Array to store user data
// let users = [];

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


// // For Signin and SignUp

// app.post('/signup', (req, res) => {
//   const { UserName , Password , firstName , LastName , Email , Phone , Country , Town , address  } = req.body;

//   // Check if the username is already taken
//   const existingUser = users.find(user => user.UserName === UserName );
//   if (existingUser) {
//     return res.status(409).json({ message: 'Username already taken' });
//   }

//   // Create a new user object
//   const newUser = { UserName , Password , firstName , LastName , Email , Phone , Country , Town , address};
//   users.push(newUser);


  
//   return res.status(201).json({ message: 'User created successfully' , user: newUser });
// });



// function generateSecretKey() {
//   // Generate a secure secret key
//   const secretKey = crypto.randomBytes(35).toString('hex');
//    return secretKey;
//  }




app.post('/signup', async (req, res) => {
  const { UserName, Password, firstName, LastName, Email, Phone, Country, Town, address } = req.body;

  // Check if the username is already taken
  const existingUser = users.find(user => user.UserName === UserName);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already taken' });
  }
  
if (Password.length < 6) {
  return res.status(400).json({ message: "Password less than 6 characters" })
}

  // Create a new user object
  const newUser = { UserName, Password, firstName, LastName, Email, Phone, Country, Town, address };
   users.push(newUser);

  // Save the updated array back to the file
  fs.writeFile('./Users.js', `module.exports = ${JSON.stringify(users)}`, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    return res.status(201).json({ message: 'User created successfully', user: newUser });
  });
});






// Sign-in route
app.post('/signin', async (req, res) => {
  const { UserName , Password } = req.body;

  // Find the user in the users array
  const user = users.find(user => user.UserName === UserName && user.Password === Password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const userPayload = {
    UserName: user.UserName,
    Password: user.Password,
    firstName: user.firstName,
    LastName: user.LastName,
    Email: user.Email,
    Phone: user.Phone,
    Country: user.Country,
    Town: user.Town,
    address: user.address,
  };

    // Generate a new secret key for each sign-in
    // const secretKey = generateSecretKey();

  const token = jwt.sign(userPayload, secretKey); // Generate a new token with an expiration time

  // localStorage.setItem('token', token); // Save the token in session storage

  return res.status(200).json({ message: 'Sign in successful' , user , token});

});


app.get('/users', (req, res) => {
  res.status(200).json(users);
});






// app.post('/blogs/comment', (req, res) => {
//   const { blogId, commentDetails } = req.body;

//   // Find the blog in the array
//   const blog = blogs.find(p => p.id === blogId);

//   if (!blog) {
//     return res.status(404).json({ error: 'Blog not found' });
//   }

//   // Add the comment to the blog's comments array
//   blog.comments.push(commentDetails);

//   // Save the updated array back to the file
//   fs.writeFile('./blogs.js', `module.exports = ${JSON.stringify(blogs)}`, (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//       return res.status(500).json({ error: 'Internal server error' });
//     }

//     // Return the updated blog object
//     res.json(blog);
//   });
// });





const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));













