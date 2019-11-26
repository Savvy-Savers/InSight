module.exports = (sequelize, type) => sequelize.define('concept', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idCourse: {
    type: type.INTEGER,
    references: {
      model: 'courses',
      key: 'id',
    },
  },
  question: type.STRING,
  description: type.STRING,
});
