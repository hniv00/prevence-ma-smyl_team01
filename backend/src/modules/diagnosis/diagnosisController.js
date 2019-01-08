import db from '../database/model/';

export const newDiagController = async (req, res) => {
  db.Diagnosis.build({
    Name: req.body.Name,
    Description: req.body.Description,
  })
    .save()
    .then(newDiagnosis => {
      const diagID = newDiagnosis.IDDiagnosis;
      const exams = req.body.ExamID;
      for (let exam of exams) {
        db.Exam_Diag.build({
          ExamID: exam,
          DiagID: diagID,
        })
          .save()
          .then(examDiag => {
            return res.json('sucessfuly added new diagnosis with relation');
          })
          .catch(error => {
            console.log('problem occured during inner insert');
          });
      }
    })
    .catch(() => {
      console.log('problem occured during insert');
    });
};

export const deleteDiagController = async (req, res) => {
  db.Diagnosis.destroy({
    where: { IDDiagnosis: req.params.id },
  }).then(deletedDiag => {
    res.json({
      response:
        deletedDiag == 1
          ? `Diagnosis with ID ${req.params.id} was deleted`
          : `Diagnosis with ID ${req.params.id} was not deleted`,
    });
  });
};

export const diagController = async (req, res) => {
  const diagList = await db.Diagnosis.findAll({
    attributes: ['IDDiagnosis', 'Name', 'Description'],
    raw: true,
  });
  return res.json({ diagList });
};

export const updateDiagController = async (req, res) => {
  db.Diagnosis.update(
    {
      Name: req.body.Name,
      Description: req.body.Description,
    },
    {
      where: { IDDiagnosis: req.params.id },
    },
  )
    .then(result => {
      const exams = req.body.ExamID;
      for (let exam of exams) {
        db.Exam_Diag.update(
          {
            ExamID: exam,
            DiagID: req.params.id,
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
      }
    })
    .catch(err => {
      return res.json('An error occured while changing the diagnosis');
    });
};
