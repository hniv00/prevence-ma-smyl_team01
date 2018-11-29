import db from '../database/model/';
const Op = db.Sequelize.Op;

export const newDiagController = async (req, res) => {

    const newDiag = db.Diagnosis.build({
        Name: req.body.Name,
        Description: req.body.Description,
    })
        .save()
        .then(exam => {
            return res.json("sucessfuly added new diagnosis");
        })
        .catch(error => {
            console.log(error);
            console.log(newDiag);
            return res.json("problem occured during insert");
        })
};

export const deleteDiagController = async (req, res) => {

    db.Diagnosis.destroy({
        where: { IDDiagnosis: req.params.id }
    })
        .then(deletedDiag => {
            console.log(`Diagnosis deleted? 1 means yes, 0 means no: ${deletedDiag}`);
        });
};
