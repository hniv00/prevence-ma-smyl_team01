
  module.exports = {
  "development": {    
    "database": process.env.DB_NAME,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIAL
    },
    "production": {
    "database": process.env.DB_NAME,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIAL
  }
  /*"production": {
    "database": 'user_team01',
    "username": 'team01',
    "password": 'xa18c65r4vb4k3v6',
    "host": "localhost",
    "dialect": 'mysql'
  }*/
  };
/*
  export const loadDatabaseConfig = (sequelize) =>{
  }
  */