module.exports = (sequelize, type) => sequelize.define('answer', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  choice: type.STRING,
  description: type.TEXT,
  idConcept: type.INTEGER,
})