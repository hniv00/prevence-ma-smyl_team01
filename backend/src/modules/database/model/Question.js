module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      IDQuestion: { type: DataTypes.INTEGER, primaryKey: true },
      Topic: DataTypes.STRING,
      Content: DataTypes.TEXT,
      Email: DataTypes.STRING,
      Answered: DataTypes.BOOLEAN,
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Question;
};
