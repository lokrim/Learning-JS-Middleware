const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 3000;

app.use(express.json());

//Defining the validation rules for the registration route
const registrationValidationRules = [
  body('email').isEmail().withMessage('Please enter a valid email address.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
];

app.post('/register', registrationValidationRules, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationError = new Error('Validation failed.');
    validationError.status = 422;
    validationError.details = errors.array();
    return next(validationError);
  }
  const { email } = req.body;
  res.status(201).send({ message: `User with email ${email} registered successfully!` });
});

app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Something went wrong on the server.';
  
  res.status(status).json({
    error: {
      message: message,
      details: err.details || [],
    },
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});