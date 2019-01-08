import db from '../database/model/';

export const newDiagPartnerController = async (req, res) => {
  const newDiagPartner = db.Diag_Partner.build({
    DiagID: req.body.DiagID,
    PartnerID: req.body.PartnerID,
  })
    .save()
    .then(diagPartner => {
      return res.json('sucessfuly added new diagnosis+partner relation');
    })
    .catch(error => {
      return res.json('problem occured during insert');
    });
};

export const deleteDiagPartnerController = async (req, res) => {
  db.Diag_Partner.destroy({
    where: { IDDiagPartner: req.params.id },
  }).then(deletedDiagPartner => {
    res.json({
      response:
        deletedDiagPartner == 1
          ? `Relation with ID ${req.params.id} was deleted`
          : `Relation with ID ${req.params.id} was not deleted`,
    });
  });
};

export const diagPartnerController = async (req, res) => {
  const diagPartnerList = await db.Diag_Partner.findAll({
    attributes: ['IDDiagPartner', 'DiagID', 'PartnerID'],
    raw: true,
    where: {
      PartnerID: req.params.id,
    },
  });
  return res.json({ diagPartnerList });
};

export const updateDiagPartnerController = async (req, res) => {
  db.Diag_Partner.update(
    {
      DiagID: req.body.DiagID,
      PartnerID: req.body.PartnerID,
    },
    {
      where: { IDDiagPartner: req.params.id },
    },
  )
    .then(result => {
      return res.json('Relation updated');
    })
    .catch(err => {
      return res.json('An error occured while updating the relation');
    });
};
