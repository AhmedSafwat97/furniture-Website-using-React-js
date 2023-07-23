/* eslint-disable eqeqeq */
const express = require('express');
const cors = require('cors');
const products = require("./products");
const blogs = require("./blogs");
const ClientReview = require("./ClientReview");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('./Users');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bodyParser = require('body-parser'); 


const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Set it to true if using port 465 (SSL/TLS)
    auth: {
      user: 'furnipro322@gmail.com',
      pass: 'evgukwryjbbxgyst',
  },
});



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
  Email: String,
  Phone: String,
  Country: String,
  Town: String,
  address: String,
  verificationCode : String,
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

// Secret key used to sign and verify the JWT
const secretKey =  'your-secret-key' ;


app.get("/", (req, res) => {
  res.send("Welcome our to online Furniture shop API...");
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
// ___________________________________________________________________


app.post('/signup', async (req, res) => {
  const {
    UserName,
    Password,
    firstName,
    Email,
    Phone,
    Country,
    Town,
    address,
    verificationCode
  } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({$or: [{ UserName }, { Email }]});
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
      Email,
      Phone,
      Country,
      Town,
      address,
      verificationCode
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
  const { Email , Password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ Email });
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
// ___________________________________________________________________


app.post('/forgot-password', async (req, res) => {
  const { Email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({ message: 'Email Not Found' });
    }

    // Generate a verification code
    const verificationCode = crypto.randomBytes(3).toString('hex');

    // Update the user record with the verification code
    await User.updateOne({ Email }, { verificationCode })

    // Compose the email message
    const mailOptions = {
      from: 'Furnipro322@gmail.com',
      to: Email,
      subject: 'Furni Pro Password Reset Verification Code',
      html: `
      <p>Hello,</p>
      <p>Your verification code for password reset is: <strong>${verificationCode}</strong></p>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Regards,</p>
      <p>Furni Pro Team</p>
    `
    };


    // Send the email
    await transporter.sendMail(mailOptions);


    const Usercode = verificationCode

    // Return success response
    res.json({ message: 'Verification code sent successfully', Usercode });
  } catch (error) {
    console.error('Error sending verification code:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/confirmcode', async (req, res) => {
  const { Email, VerificationCode } = req.body;

  // Check if both Email and VerificationCode are provided
  if (!Email || !VerificationCode) {
    return res.status(400).json({ message: 'Email and VerificationCode are required' });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email address' });
    }

    const Usercode = user.verificationCode

    // Check if the verification code sent to the email matches the code from the client
    if (Usercode === VerificationCode) {
      return res.json({ message: 'Valid verification code', Usercode });
    }else {
      // If the verification code does not match, return an error response
      return res.status(401).json({ message: 'Invalid verification code', Usercode });
    }

    

  } catch (error) {
    console.error('Error checking verification code:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/reset-password', async (req, res) => {
  const { Email , NewPassword } = req.body;

  try {
    // Hash the new password
    const hashedPassword = bcrypt.hashSync(NewPassword, 10);

    // Update the user's password in the database
    await User.updateOne({ Email }, { password: hashedPassword });

    // Return success response
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
// ___________________________________________________________________

app.post('/update-profile', async (req, res) => {
  const { UserName, Email, firstName, Phone, Country, Town, address } = req.body;

  try {
    // Access the signed-in user object from the request
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid UserName' });
    }

    // Check if the user wants to update the UserName
    if (UserName && user.UserName !== UserName) {
      // Check if the new UserName is already taken
      const existingUserName = await User.findOne({ UserName });
      if (existingUserName && existingUserName._id.toString() !== user._id.toString()) {
        return res.status(400).json({ message: 'UserName already exists' });
      }
    }

    // Check if the user wants to update the Email
    if (Email && user.Email !== Email) {
      // Check if the new Email is already taken
      const existingEmail = await User.findOne({ Email });
      if (existingEmail && existingEmail._id.toString() !== user._id.toString()) {
        return res.status(400).json({ message: 'Email already exists' });
      }
    }

    // // Prepare the update object with the fields to update
    const updateObject = {
      UserName : user.UserName,
      firstName : user.firstName,
      Email : user.Email,
      Phone : user.Phone,
      Country : user.Countery,
      Town : user.Town,
      addres : user.address,
    };

    if (UserName) {
      updateObject.UserName = UserName;
    }

    if (Email) {
      updateObject.Email = Email;
    }

    if (firstName) {
      updateObject.firstName = firstName;
    }

    if (Phone) {
      updateObject.Phone = Phone;
    }

    if (Country) {
      updateObject.Country = Country;
    }

    if (Town) {
      updateObject.Town = Town;
    }

    if (address) {
      updateObject.address = address;
    }

    // Update the user in the database
    await User.updateOne({ Email }, updateObject);

        // Generate JWT token
        const token = jwt.sign(updateObject, secretKey);

    // Send the success message in the response
    res.json({ message: 'Profile updated successfully' , token });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/changepass', async (req, res) => {
  const { Email, Password } = req.body;

  try {
    // Access the signed-in user object from the request
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid Email' });
    }

  const hashedPassword = bcrypt.hashSync(Password, 10);

  // Update the user's password in the database
  await User.updateOne({ Email }, { password: hashedPassword });
;

    // Send the updated user in the response
    res.json({ message: 'password updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
// ___________________________________________________________________


app.get('/users', (req, res) => {
  res.status(200).json(users);
});


const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));













