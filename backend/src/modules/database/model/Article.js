module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      IDArticle: { type: DataTypes.INTEGER, primaryKey: true },
      ArticleName: DataTypes.STRING,
      ArticleText: DataTypes.TEXT,
      Photo: DataTypes.TEXT,
      DiagnosisID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Diagnosis',
          key: 'IDDiagnosis',
        },
      },
      ExaminationID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Examination',
          key: 'IDExamination',
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Article;
};
