module.exports = (sequelize, DataTypes) => {
  const Anamnesis = sequelize.define('Anamnesis', {
      Title: DataTypes.STRING,
      Description: DataTypes.TEXT
    }, {});
  return Anamnesis;
};
