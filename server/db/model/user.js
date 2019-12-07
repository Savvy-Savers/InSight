module.exports = (sequelize, type) => sequelize.define('user', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  givenName: type.STRING,
  familyName: type.STRING,
  email: type.STRING,
  googleId: type.STRING,
  totalExperiencePoints: type.INTEGER,
  goal: type.STRING,
});
