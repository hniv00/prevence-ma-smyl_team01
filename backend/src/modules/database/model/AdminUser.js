module.exports = (sequelize, DataTypes) => {
  const AdminUser = sequelize.define('AdminUser', {
      Email: DataTypes.STRING,
      Password: DataTypes.TEXT
    }, {});
  return AdminUser;
};
