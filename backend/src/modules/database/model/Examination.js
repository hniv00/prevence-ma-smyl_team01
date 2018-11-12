module.exports = (sequelize, DataTypes) => {
    const Examination = sequelize.define('Examination', {
      IDExamination: { type: DataTypes.INTEGER, primaryKey: true },
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT,
      AgeFrom_basic: DataTypes.INTEGER,
      AgeFrom_ext: DataTypes.INTEGER,
      AgeUntil_basic: DataTypes.INTEGER,
      AgeUntil_ext: DataTypes.INTEGER,
      Gender: DataTypes.STRING,
      Periodicity_basic: DataTypes.INTEGER,
      Periodicity_ext: DataTypes.STRING,
      IndicationNeeded: DataTypes.INTEGER
  }, {
        freezeTableName: true,
        timestamps: false
        });
  return Examination;
};
