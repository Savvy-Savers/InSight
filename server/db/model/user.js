module.exports = (sequelize, type) => sequelize.define('user', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
  },
  givenName: type.STRING,
  familyName: type.STRING,
  email: type.STRING,
  totalExperiencePoints: type.INTEGER,
  goal: type.STRING,
});
