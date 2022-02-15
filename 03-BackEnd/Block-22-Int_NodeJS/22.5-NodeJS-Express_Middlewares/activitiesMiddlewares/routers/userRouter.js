const router = require('express').Router();
const axios = require('axios')

const { isValidUsername, isValidEmail, isValidPassWord, isValidToken } = require('../middlewares/validations');

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

router.get('/price', isValidToken, async(_req, res) => { 
  const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  
  res.status(200).json(result.data)
})

module.exports = router;