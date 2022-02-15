const router = require('express').Router();

const { isValidUsername, isValidEmail, isValidPassWord } = require('../middlewares/validations');

router.post(
  '/register',
  isValidUsername,
  isValidEmail,
  isValidPassWord,
  (_req, res) => res.status(201).json({ message: 'user created' }),
);

router.post(
  '/login',
  isValidEmail,
  isValidPassWord,
  (_req, res) => res.status(200).json({ token: '86567349784e' })
);

module.exports = router;