import db from '../database/model/';

export const newQuestionController = async (req, res) => {
  const newQuestion = db.Question.build({
    Topic: req.body.Topic,
    Content: req.body.Content,
    Email: req.body.Email,
    Answered: req.body.Answered,
  })
    .save()
    .then(question => {
      return res.json('sucessfuly added new question');
    })
    .catch(error => {
      return res.json('problem occured during insert');
    });
};

export const deleteQuestionController = async (req, res) => {
  db.Question.destroy({
    where: { IDQuestion: req.params.id },
  }).then(deletedQuestion => {
    res.json({
      response:
        deletedQuestion == 1
          ? `Question with ID ${req.params.id} was deleted`
          : `Question with ID ${req.params.id} was not deleted`,
    });
  });
};

export const questionController = async (req, res) => {
  const questionList = await db.Question.findAll({
    attributes: ['IDQuestion', 'Topic', 'Content', 'Email', 'Answered'],
    raw: true,
  });
  return res.json({ questionList });
};

export const updateQuestionController = async (req, res) => {
  db.Question.update(
    {
      Topic: req.body.Topic,
      Content: req.body.Content,
      Email: req.body.Email,
      Answered: req.body.Answered,
    },
    {
      where: { IDQuestion: req.params.id },
    },
  )
    .then(result => {
      return res.json('Question updated');
    })
    .catch(err => {
      return res.json('An error occured while updating the question');
    });
};
