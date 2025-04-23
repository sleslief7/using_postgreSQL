const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost', // or wherever the db is hosted
  user: 'sleslief',
  database: 'top_users',
  password: '0107',
  port: 5432, // The default port
});

// Another way of doing the same thing is to use a connection string
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
