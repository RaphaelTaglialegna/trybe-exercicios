const connection = require('./connection');

const Joi = require('joi');
    

    const userSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    }).messages({
        'any.required': `O campo {{#label}} é obrigatório`,
        'string.min': `O campo {{#label}}" deve ter, pelo menos, {{#limit}} caracteres`,
        'string.email': `Informe um email válido no campo {{#label}}`,
    });

    // Criamos um método para verificar se os dados do usuário são válidos
    function isValid(userData) {
    return userSchema.validate(userData);
    }

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  return {
    id,
    firstName,
    lastName,
    email,
};
}

async function create({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  return await connection.execute(query, [firstName, lastName, email, password])
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

async function findAll() {
  return await connection.execute('SELECT * from users;')
  .then(([results]) => results.map(formatUser));
}

async function updateUser(id, { firstName, lastName, email, password }) {
  const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;
  await connection.execute(query, [firstName, lastName, email, password, id]);
   return findById(id);
}

async function findById(id) {
  const user = await connection.execute('SELECT * FROM users WHERE id = ?', [id])
      .then(([results]) => (results.length ? results[0] : null));

  if (!user) {
      return null;
  }

  return formatUser(user);
}



module.exports = { 
  formatUser,
  create,
  findAll, 
  isValid, 
  updateUser,
  findById,
}