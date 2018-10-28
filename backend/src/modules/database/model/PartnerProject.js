module.exports = (sequelize, DataTypes) => {
  const PartnerProject = sequelize.define('PartnerProject', {
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT
    }, {});
  return PartnerProject;
};
