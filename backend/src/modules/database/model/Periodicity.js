module.exports = (sequelize, DataTypes) => {
  const Periodicity = sequelize.define(
    'Periodicity',
    {
      IDPeriodicity: { type: DataTypes.INTEGER, primaryKey: true },
      Periodicity_value: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Periodicity;
};
