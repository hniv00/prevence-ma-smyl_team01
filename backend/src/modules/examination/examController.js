import { EXAMINATIONS } from './examTestData';

export const examController = async (req, res) => {
  return res.json({ examinations: EXAMINATIONS });
};

export const examGenderController = async (req, res, next) => {
  const examGender = String(req.params.gender);

  const examination = getByGender(examGender);
  //return res.json({ examinations: EXAMS });

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    console.log(row.userid);
}
};



export const examDetailController = async (req, res, next) => {
  const examId = Number(req.params.id);
  const examination = getById(examId);

  if (!examination) {
    next();
  }

  return res.json({ examination });
};

const getById = examId => {
  return EXAMINATIONS.find(item => {
    return item.id === examId;
  });
};

const getByGender = examGender => {
  return EXAMINATIONS.findAll(item => {
    return item.gender === examGender;
  });
};


const getByAge = examAge => {
  return EXAMINATIONS.findAll(item => {
    return (item.age >= examAgeFrom && item.age <= examAgeUntil);
  });
};
