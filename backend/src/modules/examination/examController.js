import { EXAMINATIONS } from './examTestData';

// examinations (array of objects)

export const examController = async (req, res) => {
  return res.json({ examinations: EXAMINATIONS });
};

// examinations by gender(array of objects)

export const examGenderController = async (req, res, next) => {
    
    const examGender = String(req.params.gender);
    //EXAMINATIONS.filter({ Gender: req.params.gender });
    
    const EXAMS = getByGender(examGender);
    return res.json({ examinations: EXAMS });
    
};

const getByGender = examGender => {
    return EXAMINATIONS.filter(item => {
        return item.Gender === examGender;
    });
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

const getById = examId => {
    return EXAMINATIONS.find(exam => {
        return exam.IDExamination === examId;
  });
};



/*
 * TO DO
 *  vezme selected age a porovna ze je >= AgeFrom a <= AgeUntil
 * 
const getByAge = examAge => {
  return EXAMINATIONS.findAll(item => {
    return (item.age >= examAgeFrom && item.age <= examAgeUntil);
  });
};
*/