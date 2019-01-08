import db from '../database/model/';

export const newPartnerController = async (req, res) => {
  const newPartner = db.PartnerProject.build({
    Name: req.body.Name,
    Description: req.body.Description,
    DivID: req.body.DivID,
    Src: req.body.Src,
    SrcAlt: req.body.SrcAlt,
    Logo: req.body.Logo,
    LogoAlt: req.body.LogoAlt,
  })
    .save()
    .then(project => {
      const partnerID = project.IDProject;
      const diagnoses = req.body.DiagID;
      for (let diag of diagnoses) {
        db.Diag_Partner.build({
          DiagID: diag,
          PartnerID: partnerID,
        })
          .save()
          .then(diagPartner => {
            return res.json('sucessfuly added new diagnosis+partner relation');
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

export const partnerDiagController = async (req, res) => {
  var diags = req.body.diagnosis;
  if (diags) {
    db.sequelize
      .query(
        'SELECT DISTINCT PartnerProject.Name, PartnerProject.IDProject, PartnerProject.Description, PartnerProject.DivID, PartnerProject.Src, PartnerProject.SrcAlt, PartnerProject.Logo, PartnerProject.LogoAlt FROM PartnerProject INNER JOIN Diag_Partner ON Diag_Partner.PartnerID = PartnerProject.IDProject INNER JOIN Diagnosis ON Diag_Partner.DiagID = Diagnosis.IDDiagnosis WHERE Diagnosis.Name IN (:diagnosis)',
        {
          replacements: {
            diagnosis: diags,
            type: db.sequelize.QueryTypes.SELECT,
          },
        },
      )
      .spread(projects => {
        return res.json({ projects });
      });
  } else {
    const projects = await db.PartnerProject.findAll({
      attributes: [
        'IDProject',
        'Name',
        'Description',
        'DivID',
        'Src',
        'SrcAlt',
        'Logo',
        'LogoAlt',
      ],
      raw: true,
    });
    return res.json({ projects });
  }
};

export const deletePartnerController = async (req, res) => {
  db.PartnerProject.destroy({
    where: { IDProject: req.params.id },
  }).then(deletedProject => {
    res.json({
      response:
        deletedProject == 1
          ? `Partner project with ID ${req.params.id} was deleted`
          : `Partner project with ID ${req.params.id} was not deleted`,
    });
  });
};

export const updatePartnerController = async (req, res) => {
  db.PartnerProject.update(
    {
      Name: req.body.Name,
      Description: req.body.Description,
      DivID: req.body.DivID,
      Src: req.body.Src,
      SrcAlt: req.body.SrcAlt,
      Logo: req.body.Logo,
      LogoAlt: req.body.LogoAlt,
    },
    {
      where: { IDProject: req.params.id },
    },
  )
    .then(result => {
      return res.json('Partner project updated');
    })
    .catch(err => {
      return res.json('An error occured while updating the partner project');
    });
};
