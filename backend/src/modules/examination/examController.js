import { EXAMINATIONS } from './examTestData';
import { IDS } from './examTestData';
import db from '../database/model/';
const Op = db.Sequelize.Op;
    
export const examController = async (req, res) => {
    db.Examination.belongsTo(db.Periodicity, { foreignKey: 'Periodicity_basic', targetKey: 'Periodicity_value'});
    const exams = await db.Examination.findAll({
        attributes: ['IDExamination', 'Name', 'Description', 'Gender', 'AgeFrom_basic', 'AgeUntil_basic', 'AgeFrom_ext', 'AgeUntil_ext', 'IndicationNeeded', 'Periodicity_ext'],
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
    var indi = req.body.indication; 

    if (indi == null) {
        indi = "NULL";
    }

    db.Examination.belongsTo(db.Periodicity, { foreignKey: 'Periodicity_basic' });
    db.sequelize.query("SELECT DISTINCT A.IDExamination, A.Name, A.Description, A.Gender, A.AgeFrom_basic, A.AgeUntil_basic, A.AgeFrom_ext, A.AgeUntil_ext, A.Periodicity_value, A.Periodicity_ext, A.IndicationNeeded FROM (SELECT ex.IDExamination, ex.Name, ex.Description, ex.AgeFrom_basic, ex.AgeFrom_ext, ex.AgeUntil_basic, ex.AgeUntil_ext, ex.Gender, ex.Periodicity_ext, ex.IndicationNeeded, NULL AS NameInd, NULL AS Type, pe.Periodicity_value FROM Examination as ex JOIN Periodicity as pe ON ex.Periodicity_basic = pe.IDPeriodicity WHERE(ex.Gender = :gender OR ex.Gender = 'U') AND ex.AgeFrom_basic <= (:age) AND ex.AgeUntil_basic >= (:age) AND ex.IndicationNeeded = FALSE UNION SELECT ex.IDExamination, ex.Name, ex.Description, ex.AgeFrom_basic, ex.AgeFrom_ext, ex.AgeUntil_basic, ex.AgeUntil_ext, ex.Gender, ex.Periodicity_ext, ex.IndicationNeeded, ind.NameInd, ind.Type, pe.Periodicity_value FROM Examination as ex INNER JOIN Exam_Indic as ei ON ex.IDExamination = ei.ExamID INNER JOIN Indication as ind ON ei.IndicID = ind.IDIndication JOIN Periodicity as pe ON ex.Periodicity_basic = pe.IDPeriodicity WHERE ind.NameInd IN (:indication) ) AS A", {
        replacements: { gender: req.params.gender, age: req.params.age, indication: indi, type: db.sequelize.QueryTypes.SELECT }
    }).spread(exams => {
        return res.json({ exams });
    })
};

