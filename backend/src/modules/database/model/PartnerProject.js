'use strict';
module.exports = (sequelize, DataTypes) => {
  const PartnerProject = sequelize.define(
    'PartnerProject',
    {
      IDProject: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT,
      DivID: DataTypes.STRING,
      Src: DataTypes.STRING,
      SrcAlt: DataTypes.STRING,
      Logo: DataTypes.STRING,
      LogoAlt: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return PartnerProject;
};
