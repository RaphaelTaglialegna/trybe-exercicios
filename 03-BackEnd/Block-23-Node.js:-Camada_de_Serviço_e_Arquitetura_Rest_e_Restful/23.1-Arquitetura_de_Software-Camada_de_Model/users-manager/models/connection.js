const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '12345678',
  host: 'localhost',
  database: 'users_crud'
});

module.exports = connection;