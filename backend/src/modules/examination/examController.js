import db from '../database/model/';
const Op = db.Sequelize.Op;
    
export const examController = async (req, res) => {
    db.Examination.belongsTo(db.Periodicity, { foreignKey: 'Periodicity_basic', targetKey: 'Periodicity_value'});
    const exams = await db.Examination.findAll({
        attributes: ['IDExamination', 'ExamName', 'Description', 'Gender', 'AgeFrom_basic', 'AgeUntil_basic', 'AgeFrom_ext', 'AgeUntil_ext', 'IndicationNeeded', 'Periodicity_ext'],
        include: [{
            model: db.Periodicity,
            attributes: ['Periodicity_value'],
            required: true
        }],
        raw: true,
        where: {
            IndicationNeeded: {
                [Op.eq]: 0
            }
        }
    });
    return res.json({ exams });

};

export const examBasicController = async (req, res) => {
    db.Examination.belongsTo(db.Periodicity, { foreignKey: 'Periodicity_basic' });
    const exams = await db.Examination.findAll({
        include: [{
            model: db.Periodicity,
            required: true
        }],
        where: {
            Gender: {
                [Op.or]: [req.params.gender, "U"]
            },
            AgeFrom_basic: {
                [Op.lte]: req.params.age
            },
            AgeUntil_basic: {
                [Op.gte]: req.params.age
            },
            IndicationNeeded: {
                [Op.eq]: 0
            }
        }
    });
    return res.json({ exams });
    
};

export const examAdvancedController = async (req, res) => {
    const indi = req.body.indication; 
    let idE = 0;
    let input;

    db.Examination.belongsTo(db.Periodicity, { foreignžKey: 'Periodicity_basic' });
    db.sequelize.query("SELECT DISTINCT A.IDExamination, A.ExamName, A.Description, A.Gender, A.AgeFrom_basic, A.AgeUntil_basic, A.AgeFrom_ext, A.AgeUntil_ext, A.Periodicity_value, A.Periodicity_ext, A.IndicationNeeded FROM (SELECT ex.IDExamination, ex.ExamName, ex.Description, ex.AgeFrom_basic, ex.AgeFrom_ext, ex.AgeUntil_basic, ex.AgeUntil_ext, ex.Gender, ex.Periodicity_ext, ex.IndicationNeeded, NULL AS NameInd, NULL AS Type, pe.Periodicity_value FROM Examination as ex JOIN Periodicity as pe ON ex.Periodicity_basic = pe.IDPeriodicity WHERE(ex.Gender = :gender OR ex.Gender = 'U') AND ex.AgeFrom_basic <= (:age) AND ex.AgeUntil_basic >= (:age) AND ex.IndicationNeeded = FALSE UNION SELECT ex.IDExamination, ex.ExamName, ex.Description, ex.AgeFrom_basic, ex.AgeFrom_ext, ex.AgeUntil_basic, ex.AgeUntil_ext, ex.Gender, ex.Periodicity_ext, ex.IndicationNeeded, ind.NameInd, ind.Type, pe.Periodicity_value FROM Examination as ex INNER JOIN Exam_Indic as ei ON ex.IDExamination = ei.ExamID INNER JOIN Indication as ind ON ei.IndicID = ind.IDIndication JOIN Periodicity as pe ON ex.Periodicity_basic = pe.IDPeriodicity WHERE ind.NameInd IN (:indication) ) AS A", {
        replacements: { gender: req.params.gender, age: req.params.age, indication: indi, type: db.sequelize.QueryTypes.SELECT }
    }).spread(async (examList) => {
        for (const exam of examList) {
            input = await examList[idE].IDExamination; 
            await db.sequelize.query("SELECT Diagnosis.Name FROM Diagnosis INNER JOIN Exam_Diag on Diagnosis.IDDiagnosis = Exam_Diag.DiagID INNER JOIN Examination on Examination.IDExamination = Exam_Diag.ExamID WHERE Examination.IDExamination = :exid", {
                replacements: { exid: input } 
            }).spread(async (diagList) => {
                input = await examList[idE].IDExamination;
                idE = await (idE + 1);
                if (diagList != "") {
                    examList[idE]["Diagnosis"] = await diagList;
                }
                else {
                    if (examList[idE] !== undefined) {
                        examList[idE]["Diagnosis"] = [{}];
                    }
                }
                })
        }
        return res.send({ examList });
    })
};


export const examAMController = async (req, res) => {

    const newExam = db.Examination.build({
        ExamName: req.body.ExamName,
        Description: req.body.Description,
        AgeFrom_basic: req.body.AgeFrom_basic,
        AgeFrom_ext: req.body.AgeFrom_ext,
        AgeUntil_basic: req.body.AgeUntil_basic,
        AgeUntil_ext: req.body.AgeUntil_ext,
        Gender: req.body.Gender,
        Periodicity_basic: req.body.Periodicity_basic,
        Periodicity_ext: req.body.Periodicity_ext,
        IndicationNeeded: req.body.IndicationNeeded

    })
        .save()
        .then(exam => {
            console.log(exam);
        })
        .catch(error => {
            console.log(error);
            console.log(newExam);
        })
    return res.json("successfuly added new examination");
};

export const examDeleteController = async (req, res) => {

    db.Examination.destroy({
        where: { IDExamination: req.params.id }
    })
    .then(deletedExam => {
        return res.json(`Examination deleted? 1 means yes, 0 means no: ${deletedExam}`);
    });
};
