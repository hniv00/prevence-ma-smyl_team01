module.exports = (sequelize, DataTypes) => {
  const ExamPlace = sequelize.define('ExamPlace', {
      Name: DataTypes.STRING,
      Street: DataTypes.STRING,
      StreetNum: DataTypes.STRING,
      City: DataTypes.STRING,
      PostalCode: DataTypes.INTEGER
    }, {});
  return ExamPlace;
};
