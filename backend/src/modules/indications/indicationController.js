import db from '../database/model/';

export const newIndicationController = async (req, res) => {
  const newInd = db.Indication.build({
    NameInd: req.body.NameInd,
    Type: req.body.Type,
  })
    .save()
    .then(indication => {
      const indicID = indication.IDIndication;
      const exams = req.body.ExamID;
      for (let exam of exams) {
        db.Exam_Indic.build({
          ExamID: exam,
          IndicID: indicID,
        })
          .save()
          .then(examIndic => {
            return res.json('sucessfuly added new indication with relation');
          })
          .catch(error => {
            console.log('problem occured during inner insert');
          });
      }
    })
    .catch(error => {
      console.log('problem occured during insert');
    });
};

export const deleteIndicationController = async (req, res) => {
  db.Indication.destroy({
    where: { IDIndication: req.params.id },
  }).then(deletedIndication => {
    res.json({
      response:
        deletedIndication == 1
          ? `Indication with ID ${req.params.id} was deleted`
          : `Indication with ID ${req.params.id} was not deleted`,
    });
  });
};

export const indicationController = async (req, res) => {
  const indications = await db.Indication.findAll({
    attributes: ['IDIndication', 'NameInd', 'Type'],
    raw: true,
  });
  return res.json({ indications });
};

export const indicationTreatmentController = async (req, res) => {
  const indications = await db.Indication.findAll({
    attributes: ['IDIndication', 'NameInd', 'Type'],
    raw: true,
    where: {
      Type: {
        $like: '%' + 'se s' + '%',
      },
    },
  });
  return res.json({ indications });
};

export const indicationFanamnesisController = async (req, res) => {
  const indications = await db.Indication.findAll({
    attributes: ['IDIndication', 'NameInd', 'Type'],
    raw: true,
    where: {
      Type: {
        $like: '%' + 'rodin' + '%',
      },
    },
  });
  return res.json({ indications });
};

export const indicationLifestyleController = async (req, res) => {
  const indications = await db.Indication.findAll({
    attributes: ['IDIndication', 'NameInd', 'Type'],
    raw: true,
    where: {
      Type: {
        $like: '%' + 'styl' + '%',
      },
    },
  });
  return res.json({ indications });
};

export const updateIndicationController = async (req, res) => {
  db.Indication.update(
    {
      NameInd: req.body.NameInd,
      Type: req.body.Type,
    },
    {
      where: { IDIndication: req.params.id },
    },
  )
    .then(result => {
      return res.json('Indication updated');
    })
    .catch(err => {
      return res.json('An error occured while changing the indication');
    });
};
