import db from '../database/model/';

export const newDiagIndicController = async (req, res) => {
  const newDiagIndic = db.Diag_Indic.build({
    DiagID: req.body.DiagID,
    IndicID: req.body.IndicID,
  })
    .save()
    .then(diagIndic => {
      return res.json('sucessfuly added new diagnosis+indication relation');
    })
    .catch(error => {
      return res.json('problem occured during insert');
    });
};

export const deleteDiagIndicController = async (req, res) => {
  db.Diag_Indic.destroy({
    where: { IDDiagIndic: req.params.id },
  }).then(deletedDiagIndic => {
    res.json({
      response:
        deletedDiagIndic == 1
          ? `Relation with ID ${req.params.id} was deleted`
          : `Relation with ID ${req.params.id} was not deleted`,
    });
  });
};

export const diagIndicController = async (req, res) => {
  const diagIndicList = await db.Diag_Indic.findAll({
    attributes: ['IDDiagIndic', 'DiagID', 'IndicID'],
    raw: true,
  });
  return res.json({ diagIndicList });
};

export const updateDiagIndicController = async (req, res) => {
  db.Diag_Indic.update(
    {
      DiagID: req.body.DiagID,
      IndicID: req.body.IndicID,
    },
    {
      where: { IDDiagIndic: req.params.id },
    },
  )
    .then(result => {
      return res.json('Relation updated');
    })
    .catch(err => {
      return res.json('An error occured while updating the relation');
    });
};
