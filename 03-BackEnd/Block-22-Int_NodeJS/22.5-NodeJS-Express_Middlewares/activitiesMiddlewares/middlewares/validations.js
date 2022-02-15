// Tratatmento de erro do username
const isValidUsername = (req, res, next) => { 
  const { username } = req.body;

  if(!username || username.length < 3)
    return res.status(400).json({ message: 'invalid data'})
    next();

}; 

// Tratamento de Erro do email npm install node-email-validation retorna true or false.

const validator = require('node-email-validation');

const isValidEmail = (req, res, next) => { 
  const { email } = req.body;
  const validadtion = validator.is_email_valid(email)
      if (!validadtion) 
      return res.status(400).json({ message: 'invalid data'})
      
      next();
}; 

// Validação do Password
const isValidPassWord = (req, res, next) => { 
  const { password } = req.body; 
  const passwordRegex = /^[0-9]*$/;

  if(password.length < 3 || 
     password.length > 8 ||
     !password.match(passwordRegex) 
     ) return res.status(400).json({ message: 'invalid data'})
    
  next();

};

module.exports = { isValidUsername, isValidEmail, isValidPassWord };
