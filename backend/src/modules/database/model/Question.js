module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
      Topic: DataTypes.STRING,
      Content: DataTypes.TEXT,
      Email: DataTypes.STRING,
      Answered: DataTypes.BOOLEAN
    }, {});
  return Question;
};
