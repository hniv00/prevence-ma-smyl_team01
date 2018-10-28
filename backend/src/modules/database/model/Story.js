module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
      Title: DataTypes.STRING,
      Description: DataTypes.TEXT,
      URL: DataTypes.STRING
    }, {});
  return Story;
};
