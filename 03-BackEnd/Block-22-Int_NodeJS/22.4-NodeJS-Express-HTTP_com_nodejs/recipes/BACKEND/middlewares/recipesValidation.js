const recipesValidation = (req, res, next) => { 
  const { name, price } = req.body;
  if(!name)
    return res.status(400).json({ message: 'Invalide data!'});
  if(!price || price < 0)
    return res.status(400).json({ message: 'Deve conter o preço maior que zero'});
  next();
};

module.exports = recipesValidation;