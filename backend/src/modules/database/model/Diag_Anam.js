module.exports = (sequelize, DataTypes) => {
  const DiagAnam = sequelize.define('DiagAnam', {
      DiagID: DataTypes.INTEGER,
      AnamID: DataTypes.INTEGER
    }, {});
  return DiagAnam;
};
