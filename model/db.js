const pgp = require('pg-promise')();

const config = process.env.DATABASE_URL || {
  host:       process.env.PG_HOST,
  port:       process.env.PG_PORT,
  database:   process.env.PG_DATABASE,
  user:       process.env.PG_USER,
  password:   process.env.PG_PASS
};

const db = pgp(config);

module.exports = db;


