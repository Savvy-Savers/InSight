module.exports = (sequelize, type) => {
  return sequelize.define('user', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: type.STRING,
    lastName: type.STRING,
    totalExpriencePoints: type.INTEGER,
    goal: type.STRING,
  });
};
