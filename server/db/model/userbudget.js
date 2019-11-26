module.exports = (sequelize, type) => sequelize.define('userBudget', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  income: type.INTEGER,
  outcome: type.INTEGER,
  idUser: {
    type: type.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
});
