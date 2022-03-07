require('dotenv').config();

module.exports = {
  development: {
    username: "root",
    password: "12345678",
    database: "associations",
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: "root",
    password: "12345678",
    database: "orm_assoc_test_db",
    host: "127.0.0.1",
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};