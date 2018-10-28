module.exports = (sequelize, DataTypes) => {
  const Diagnosis = sequelize.define('Diagnosis', {
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT
    }, {});
  return Diagnosis;
};
