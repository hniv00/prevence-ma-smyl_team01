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
            return res.json("problem occured during insert");
        })
};

export const deleteDiagController = async (req, res) => {

    db.Diagnosis.destroy({
        where: { IDDiagnosis: req.params.id }
    })
        .then(deletedDiag => {
            res.json({
                response: deletedDiag == 1 ? `Diagnosis with ID ${req.params.id} was deleted` : `Diagnosis with ID ${req.params.id} was not deleted`})
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
