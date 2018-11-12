import { EXAMINATIONS } from './examTestData';
import { IDS } from './examTestData';
import db from '../database/model/';
const Op = db.Sequelize.Op;
    
// examinations (array of objects)

export const examController = async (req, res) => {
    const exams = await db.Examination.findAll({});
    return res.json({ exams });
    
    /*.query("SELECT * FROM Examination")
        .then(exams => {
            console.log(exams);
        });*/

};

export const examBasicController = async (req, res) => {

    const exams = await db.Examination.findAll({
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