const { body, validationResult } = require('express-validator');

const valiFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createUserValidation = [
  body('name').notEmpty().withMessage('email cannot be empty'),
  body('email').notEmpty().withMessage('email cannot be empty'),
  body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long'),
  valiFields,
];

exports.userValidation = [
  body('email').notEmpty().withMessage('email cannot be empty'),
  body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long'),
  valiFields,
];

exports.repairsUser = [
  body('date').notEmpty().withMessage('invalid date format'),
  body('motorsNumber')
    .notEmpty()
    .withMessage('motorsNumber not empty'),
  body('description')
    .notEmpty()
    .withMessage('description not empty')
    .isLength({ min: 10 }),
];
