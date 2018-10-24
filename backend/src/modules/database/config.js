import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    database: 'prevencemasmysl',
    username: 'root',
    password: null,
    dialect: 'mysql'
  });