module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define(
    'Feed',
    {
      Approved: DataTypes.BOOLEAN,
    },
    {},
  );
  return Feed;
};
