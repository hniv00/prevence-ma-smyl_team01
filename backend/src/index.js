import dotenv from 'dotenv';

import { app } from './server';
import { setupLogging } from './logging';
import  Sequelize  from 'sequelize';

dotenv.config();
const { PORT = 3030 } = process.env;
const { DB_CONNECTIONSTRING} = process.env;

const sequelize = new Sequelize(DB_CONNECTIONSTRING);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//setupLogging();

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}!`);
});
