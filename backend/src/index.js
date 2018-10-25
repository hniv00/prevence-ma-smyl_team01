import dotenv from 'dotenv';

import { app } from './server';
//import { sequelize } from './modules/database/config'
//const Sequelize = require('sequelize');
//import { setupLogging } from './logging';

//const model = require('./modules/database/model/');

dotenv.config();

const { PORT = 3030 } = process.env;
/*
model.sequelize.

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

*/

//setupLogging();

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}!`);
});
