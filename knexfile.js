module.exports = {
  development: {
    client: 'pg',
    connection: "postgresql://localhost:3005/pokemon"
  },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL 
  // },

};
