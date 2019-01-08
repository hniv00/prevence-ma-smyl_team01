import db from '../database/model/';

export const newArticleController = async (req, res) => {
  const newArticle = db.Article.build({
    ArticleName: req.body.ArticleName,
    ArticleText: req.body.ArticleText,
    Photo: req.body.Photo,
    DiagnosisID: req.body.DiagnosisID,
    ExaminationID: req.body.ExaminationID,
  })
    .save()
    .then(article => {
      return res.json('sucessfuly added new article');
    })
    .catch(error => {
      return res.json('problem occured during insert');
    });
};

export const deleteArticleController = async (req, res) => {
  db.Article.destroy({
    where: { IDArticle: req.params.id },
  }).then(deletedArticle => {
    res.json({
      response:
        deletedArticle == 1
          ? `Article with ID ${req.params.id} was deleted`
          : `Article with ID ${req.params.id} was not deleted`,
    });
  });
};

export const articleController = async (req, res) => {
  db.Article.belongsTo(db.Diagnosis, { foreignKey: 'DiagnosisID' });
  db.Article.belongsTo(db.Examination, { foreignKey: 'ExaminationID' });
  const articleList = await db.Article.findAll({
    include: [
      {
        model: db.Diagnosis,
        attributes: ['Name'],
      },
      {
        model: db.Examination,
        attributes: ['ExamName'],
      },
    ],
    attributes: [
      'IDArticle',
      'ArticleName',
      'ArticleText',
      'Photo',
      'DiagnosisID',
      'ExaminationID',
    ],
    raw: true,
  });

  return res.json({ articleList });
};

export const updateArticleController = async (req, res) => {
  db.Article.update(
    {
      ArticleName: req.body.ArticleName,
      ArticleText: req.body.ArticleText,
      Photo: req.body.Photo,
      DiagnosisID: req.body.DiagnosisID,
      ExaminationID: req.body.ExaminationID,
    },
    {
      where: { IDArticle: req.params.id },
    },
  )
    .then(result => {
      return res.json('Article updated');
    })
    .catch(err => {
      return res.json('An error occured while changing the article');
    });
};
