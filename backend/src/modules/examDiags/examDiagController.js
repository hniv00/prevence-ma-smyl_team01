import db from '../database/model/';

export const newExamDiagController = async (req, res) => {
  const newExamDiag = db.Exam_Diag.build({
    ExamID: req.body.ExamID,
    DiagID: req.body.DiagID,
  })
    .save()
    .then(examDiag => {
      return res.json('sucessfuly added new examination+diagnosis relation');
    })
    .catch(error => {
      return res.json('problem occured during insert');
    });
};

export const deleteExamDiagController = async (req, res) => {
  db.Exam_Diag.destroy({
    where: { IDExamDiag: req.params.id },
  }).then(deletedExamDiag => {
    res.json({
      response:
        deletedExamDiag == 1
          ? `Relation with ID ${req.params.id} was deleted`
          : `Relation with ID ${req.params.id} was not deleted`,
    });
  });
};

export const examDiagController = async (req, res) => {
  const examDiagList = await db.Exam_Diag.findAll({
    attributes: ['IDExamDiag', 'ExamID', 'DiagID'],
    raw: true,
    where: {
      DiagID: req.params.id,
    },
  });
  return res.json({ examDiagList });
};

export const updateExamDiagController = async (req, res) => {
  db.Exam_Diag.update(
    {
      ExamID: req.body.ExamID,
      DiagID: req.body.DiagID,
    },
    {
      where: { IDExamDiag: req.params.id },
    },
  )
    .then(result => {
      return res.json('Relation updated');
    })
    .catch(err => {
      return res.json('An error occured while updating the relation');
    });
};
