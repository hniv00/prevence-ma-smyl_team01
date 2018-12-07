import db from '../database/model/';
const Op = db.Sequelize.Op;

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
            return res.json("sucessfuly added new partner project");
        })
        .catch(error => {
            console.log(error);
            console.log(newPartner);
            return res.json("problem occured during insert");
        })
};

export const partnerDiagController = async (req, res) => {
    var diags = req.body.diagnosis;
    if (diags !== "") {
        db.sequelize.query("SELECT DISTINCT PartnerProject.Name, PartnerProject.IDProject, PartnerProject.Description, PartnerProject.DivID, PartnerProject.Src, PartnerProject.SrcAlt, PartnerProject.Logo, PartnerProject.LogoAlt FROM PartnerProject INNER JOIN Diag_Partner ON Diag_Partner.PartnerID = PartnerProject.IDProject INNER JOIN Diagnosis ON Diag_Partner.DiagID = Diagnosis.IDDiagnosis WHERE Diagnosis.Name IN (:diagnosis)", {
            replacements: { diagnosis: diags, type: db.sequelize.QueryTypes.SELECT }
        }).spread(projects => {
            return res.json({ projects });
        })
    } else {
        const projects = await db.PartnerProject.findAll({
            attributes: ['IDProject', 'Name', 'Description', 'DivID', 'Src', 'SrcAlt', 'Logo', 'LogoAlt'],
            raw: true,
        });
        return res.json({ projects });
    }
 
};
