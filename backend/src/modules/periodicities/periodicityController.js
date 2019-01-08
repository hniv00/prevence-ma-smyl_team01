import db from '../database/model/';

export const periodicityController = async (req, res) => {
  const periodicityList = await db.Periodicity.findAll({
    attributes: ['IDPeriodicity', 'Periodicity_value'],
    raw: true,
  });
  return res.json({ periodicityList });
};
