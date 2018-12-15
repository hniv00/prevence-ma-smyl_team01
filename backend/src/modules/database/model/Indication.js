module.exports = (sequelize, DataTypes) => {
    const Indication = sequelize.define('Indication', {
      IDIndication: { type: DataTypes.INTEGER, primaryKey: true },
      NameInd: DataTypes.STRING,
      Type: DataTypes.STRING
  }, {
        freezeTableName: true,
        timestamps: false
        });
    return Indication;
};