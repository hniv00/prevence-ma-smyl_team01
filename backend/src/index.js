import dotenv from 'dotenv';

import { app } from './server';
//import { sequelize } from './modules/database/config'

import { setupLogging } from './logging';

const port = 3030
/*
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/
app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);
