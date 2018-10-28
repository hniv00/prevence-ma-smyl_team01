module.exports = (sequelize, DataTypes) => {
  const Examination = sequelize.define('Examination', {
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT,
      AgeFrom: DataTypes.INTEGER,
      AgeUntil: DataTypes.INTEGER,
      Gender: DataTypes.STRING      
    }, {});
  return Examination;
};
