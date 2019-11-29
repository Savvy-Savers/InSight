module.exports = (sequelize, type) => sequelize.define('user', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: type.STRING,
  lastName: type.STRING,
  totalExpriencePoints: {
    type: type.INTEGER,
    allowNull: false,
  },
  goal: type.STRING,
});
