module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT,
      Date: DataTypes.DATE,
      Time: DataTypes.TIME,
      Street: DataTypes.STRING,
      StreetNum: DataTypes.STRING, // DataTypes.INTEGER ?
      City: DataTypes.STRING,
      PostalCode: DataTypes.INTEGER
    }, {});
  return Event;
};
