module.exports = (sequelize, DataTypes) => {
  const AdminUser = sequelize.define(
    'AdminUser',
    {
      IDAUser: { type: DataTypes.INTEGER, primaryKey: true },
      Username: DataTypes.STRING,
      Password: DataTypes.TEXT,
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return AdminUser;
};
