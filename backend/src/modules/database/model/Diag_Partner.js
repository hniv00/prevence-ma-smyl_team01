module.exports = (sequelize, DataTypes) => {
  const Diag_Partner = sequelize.define(
    'Diag_Partner',
    {
      IDDiagPartner: { type: DataTypes.INTEGER, primaryKey: true },
      DiagID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Diagnosis',
          key: 'IDDiagnosis',
        },
      },
      PartnerID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'PartnerProject',
          key: 'IDProject',
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Diag_Partner;
};
