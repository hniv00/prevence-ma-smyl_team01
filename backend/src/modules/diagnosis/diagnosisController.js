import db from '../database/model/';

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
            res.json({response: deletedDiag == 1 ? `Diagnosis with ID ${deletedDiag} was deleted`: 'Diagnosis with ID ${deletedDiag}  was not deleted'})
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

    db.Diagnosis.update({
        Name: req.body.Name,
        Description: req.body.Description
    }, {
            where: { IDDiagnosis: req.params.id }
        })
        .then(result => { return res.json("Diagnosis updated"); })
        .catch(err => { return res.json("An error occured while changing the diagnosis"); })
};
