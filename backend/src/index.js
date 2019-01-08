import dotenv from 'dotenv';

import { app } from './server';
import { setupLogging } from './logging';
import Sequelize from 'sequelize';

dotenv.config();
console.log(process.env.DB_USER);
const { PORT = 3030 } = process.env;
const { DB_CONNECTIONSTRING } = process.env;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mysql',
    logging: false,
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}!`);
});
