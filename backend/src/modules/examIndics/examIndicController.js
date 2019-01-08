import db from '../database/model/';

export const newExamIndicController = async (req, res) => {
  const newExamIndic = db.Exam_Indic.build({
    ExamID: req.body.ExamID,
    IndicID: req.body.IndicID,
  })
    .save()
    .then(examIndic => {
      return res.json('sucessfuly added new examination+indication relation');
    })
    .catch(error => {
      return res.json('problem occured during insert');
    });
};

export const deleteExamIndicController = async (req, res) => {
  db.Exam_Indic.destroy({
    where: { IDExamIndic: req.params.id },
  }).then(deletedExamIndic => {
    res.json({
      response:
        deletedExamIndic == 1
          ? `Relation with ID ${req.params.id} was deleted`
          : `Relation with ID ${req.params.id} was not deleted`,
    });
  });
};

export const examIndicController = async (req, res) => {
  const examIndicList = await db.Exam_Indic.findAll({
    attributes: ['IDExamIndic', 'ExamID', 'IndicID'],
    raw: true,
    where: {
      IndicID: req.params.id,
    },
  });
  return res.json({ examIndicList });
};

export const updateExamIndicController = async (req, res) => {
  db.Exam_Indic.update(
    {
      ExamID: req.body.ExamID,
      IndicID: req.body.IndicID,
    },
    {
      where: { IDExamIndic: req.params.id },
    },
  )
    .then(result => {
      return res.json('Relation updated');
    })
    .catch(err => {
      return res.json('An error occured while updating the relation');
    });
};
