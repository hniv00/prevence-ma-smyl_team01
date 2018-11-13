import { EXAMINATIONS } from './examTestData';
import { IDS } from './examTestData';
import db from '../database/model/';
const Op = db.Sequelize.Op;
    
// examinations (array of objects)

export const examController = async (req, res) => {
    db.Examination.belongsTo(db.Periodicity, { foreignKey: 'Periodicity_basic' });
    const exams = await db.Examination.findAll({
        include: [{
            model: db.Periodicity,
            required: true
        }],
        where: {
            IndicationNeeded: {
                [Op.eq]: 0
            }
        }
    });

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
    console.log("req param age: " + req.params.age);
    console.log("req param gender: " + req.params.gender);
    const indi = ['cukrovka']; // req.body ?

    db.Examination.belongsTo(db.Periodicity, { foreignKey: 'Periodicity_basic' });
    db.sequelize.query("SELECT DISTINCT A.IDExamination, A.Name, A.Description, A.Gender, A.AgeFrom_basic, A.AgeUntil_basic, A.AgeFrom_ext, A.AgeUntil_ext, A.Periodicity_value, A.Periodicity_ext, A.IndicationNeeded FROM (SELECT ex.IDExamination, ex.Name, ex.Description, ex.AgeFrom_basic, ex.AgeFrom_ext, ex.AgeUntil_basic, ex.AgeUntil_ext, ex.Gender, ex.Periodicity_ext, ex.IndicationNeeded, NULL AS NameInd, NULL AS Type, pe.Periodicity_value FROM Examination as ex JOIN Periodicity as pe ON ex.Periodicity_basic = pe.IDPeriodicity WHERE(ex.Gender = :gender OR ex.Gender = 'U') AND ex.AgeFrom_basic <= (:age) AND ex.AgeUntil_basic >= (:age) AND ex.IndicationNeeded = FALSE UNION SELECT ex.IDExamination, ex.Name, ex.Description, ex.AgeFrom_basic, ex.AgeFrom_ext, ex.AgeUntil_basic, ex.AgeUntil_ext, ex.Gender, ex.Periodicity_ext, ex.IndicationNeeded, ind.NameInd, ind.Type, pe.Periodicity_value FROM Examination as ex INNER JOIN Exam_Indic as ei ON ex.IDExamination = ei.ExamID INNER JOIN Indication as ind ON ei.IndicID = ind.IDIndication JOIN Periodicity as pe ON ex.Periodicity_basic = pe.IDPeriodicity WHERE ind.NameInd = :indication ) AS A", {
        replacements: { gender: req.params.gender, age: req.params.age, indication: indi, type: db.sequelize.QueryTypes.SELECT }
    }).then(exams => {
        return res.json({ exams });
    })
};



// examinations by gender(array of objects)

export const examGenderController = async (req, res, next) => {
    
    const examGender = String(req.params.gender);
    //EXAMINATIONS.filter({ Gender: req.params.gender });
    
    const EXAMS = getByGender(examGender);

    if (!EXAMS) {
        next();
    }
    return res.json({ examinations: EXAMS });
    
};

// examination detail by ID (single object)

export const examDetailController = async (req, res, next) => {
  const examId = Number(req.params.id);
  const examination = getById(examId);

  if (!examination) {
    next();
  }

  return res.json({ examination });
};

// examinations by age (array of objects)

export const examAgeController = async (req, res, next) => {
    const examAge = Number(req.params.age);
    const EXAMS = getByAge(examAge);

    /*if (!examination) {
        next();
    }*/

    return res.json({ examinations: EXAMS });
};


const getById = examId => {
    return EXAMINATIONS.find(exam => {
        return exam.IDExamination === examId;
  });
};

const getByGender = examGender => {
    return EXAMINATIONS.filter(item => {
        return (item.Gender === examGender || item.Gender === 'U');
    });
};


/*
 *      item.AgeFrom <= input  ... ok
 *      item.AgeFrom > input   ... nok
 *      item.AgeUntil >= input ... ok
 *      item.AgeUntil < input  ... nok
 *  
 * */
const getByAge = examAge => {
    return EXAMINATIONS.filter(item => {
        return ((item.AgeFrom <= examAge && item.AgeUntil >= examAge));
  });
};



export const examMultiController = async (req, res, next) => {
    const examGender = String(req.params.gender);
    const examAge = Number(req.params.age);
    const examAnam = Array(req.query);

    const exams1 = getByGender(examGender);
    const exams2 = getByAge(examAge);

    const anamnezy = IDS;


    //exams1.concat(exams2);

    //const exams3 = getByAnamnesis(examAnam);
    
    /*if (!exams1 || !exams2) {
        next();
    }*/

    var result = [];
    /*
    exams2.map(function (x) {
        result = exams1.filter(a1 => a1.IDExamination === x.IDExamination);
        console.log("x: " + x);
        return x
    })
    */
    

    console.log("----- EXAMS 1 ------");
    console.log(exams1);
    console.log("----- EXAMS 2 ------");
    console.log(exams2);
    console.log("----- Intersection ------");
    console.log(result);
    console.log("--------------------");
    


    return res.json({ examinations: result });

};
/*
const getByAnamnesis = examAnam => {
    return EXAMINATIONS.filter(item => {
        

        return ((item.IDExamination === examAge && item.AgeUntil >= examAge));
    });
};
*/