module.exports = (sequelize, DataTypes) => {
  const Diag_Indic = sequelize.define(
    'Diag_Indic',
    {
      IDDiagIndic: { type: DataTypes.INTEGER, primaryKey: true },
      DiagID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Diagnosis',
          key: 'IDDiagnosis',
        },
      },
      IndicID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Indication',
          key: 'IDIndication',
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Diag_Indic;
};
