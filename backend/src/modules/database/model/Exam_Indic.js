module.exports = (sequelize, DataTypes) => {
  const Exam_Indic = sequelize.define(
    'Exam_Indic',
    {
      IDExamIndic: { type: DataTypes.INTEGER, primaryKey: true },
      ExamID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Examination',
          key: 'IDExamination',
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
  return Exam_Indic;
};
