import db from '../database/model/';
const Op = db.Sequelize.Op;

export const diagController = async (req, res) => {

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
}
