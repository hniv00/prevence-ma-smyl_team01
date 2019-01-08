'use strict';
module.exports = (sequelize, DataTypes) => {
  const Diagnosis = sequelize.define(
    'Diagnosis',
    {
      IDDiagnosis: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT,
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Diagnosis;
};
