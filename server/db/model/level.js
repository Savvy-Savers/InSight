module.exports = (sequelize, type) => sequelize.define('level', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: type.STRING,
  experiencePointsThreshold: type.INTEGER,
});
