const env = process.env.NODE_ENV || 'development';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');


const config = require(__dirname + '/../config.js')[env];
const DataTypes = require('sequelize/lib/data-types');
import dotenv from 'dotenv';

dotenv.config();
let db = {};
let sequelize = {};

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        dialect: 'mysql',
        logging: false
    });
    console.log("2nd initiate");
}

// Add all modules to this array
const modelModules = [
    require('./Diagnosis'),
    require('./Examination'),
    require('./Periodicity'),
    require('./AdminUser'),
    require('./PartnerProject'),
    require('./Story'),
];

modelModules.forEach(modelModule => {
  const model = modelModule(sequelize, DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//db.exam = require('./Examination')(sequelize, Sequelize);


export default db;
