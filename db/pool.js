const { Pool } = require('pg');

module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DB_USER_PASSWORD,
  port: process.env.DB_PORT,
});

// Another way of doing the same thing is to use a connection string
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
