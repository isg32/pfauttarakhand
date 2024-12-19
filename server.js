const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle POST request
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, contact, message } = req.body;

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: 'rahulkushwah@plutosolve.com', // Replace with your email
      pass: 'Plutosolve@123', // Replace with your email password (or app-specific password)
    },
  });

  const mailOptions = {
    from: email,
    to: 'recipient-email@gmail.com', // Replace with the recipient's email
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Contact: ${contact}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
