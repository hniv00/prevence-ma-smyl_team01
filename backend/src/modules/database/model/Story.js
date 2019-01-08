'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    'Story',
    {
      IDStory: { type: DataTypes.INTEGER, primaryKey: true },
      Name: DataTypes.STRING,
      Age: DataTypes.INTEGER,
      Description: DataTypes.TEXT,
      Img: DataTypes.TEXT,
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Story;
};
