import dotenv from 'dotenv';

import { app } from './server';
//import { sequelize } from './modules/database/config'
//const Sequelize = require('sequelize');
//import { setupLogging } from './logging';

//const model = require('./modules/database/model/');


/*
const Sequelize = require('sequelize');
const sequelize = new Sequelize('user_team01', 'team01', 'xa18c65r4vb4k3v6', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    
});
*/

dotenv.config();

const { PORT = 3030 } = process.env;

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

//setupLogging();

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}!`);
});
