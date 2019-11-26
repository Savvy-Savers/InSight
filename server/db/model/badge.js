module.exports = (sequelize, type) => sequelize.define('badge', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: type.STRING,
  iconUrl: type.STRING,
  expriencePoints: type.INTEGER,
  description: type.STRING,
});
