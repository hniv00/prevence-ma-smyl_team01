module.exports = (sequelize, DataTypes) => {
  const Exam_Diag = sequelize.define(
    'Exam_Diag',
    {
      IDExamDiag: { type: DataTypes.INTEGER, primaryKey: true },
      ExamID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Examination',
          key: 'IDExamination',
        },
      },
      DiagID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Diagnosis',
          key: 'IDDiagnosis',
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Exam_Diag;
};
