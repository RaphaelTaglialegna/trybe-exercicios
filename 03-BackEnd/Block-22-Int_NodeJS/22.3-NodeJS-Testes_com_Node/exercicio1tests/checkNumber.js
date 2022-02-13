function checkNumber(num) {
  if (!Number.isInteger(num) === true) {
    return 'o valor deve ser um número';
  };  
  if (num > 0) {
    return 'positivo';
  };
  if (num < 0) {
    return 'negativo';
  };
  if (num === 0) {
    return 'neutro';
  };
};

module.exports = checkNumber;