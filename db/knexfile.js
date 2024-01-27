const knex = require('knex');

const db = knex({
  client: 'mysql', 
  connection: {
    host: 'localhost',
    user: 'root',
    password: '6278',
    database: 'taskmanagementsystem',
  },
});

module.exports = db;