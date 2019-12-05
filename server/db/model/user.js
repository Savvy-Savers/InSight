module.exports = (sequelize, type) => sequelize.define('user', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: type.STRING,
  lastName: type.STRING,
  email: type.String,
  totalExperiencePoints: type.INTEGER,
  goal: type.STRING,
});
