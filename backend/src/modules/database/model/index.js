const env = process.env.NODE_ENV || 'development';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config.js')[env];
const DataTypes = require('sequelize/lib/data-types');

let db = {};
let sequelize = {};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
   config.database,
   config.username,
   config.password,
   config
  );
    console.log('');
}



// Add all modules to this array
const modelModules = [
  require('./diagnosis'),
  require('./examination'),
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

//db.exam = require('./Examination')(sequelize, Sequelize);

export default db;
