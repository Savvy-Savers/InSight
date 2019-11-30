module.exports = (sequelize, type) => sequelize.define('badge', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: type.STRING,
  iconUrl: type.STRING,
  experiencePoints: type.INTEGER,
  description: type.STRING,
});
