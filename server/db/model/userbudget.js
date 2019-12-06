module.exports = (sequelize, type) => sequelize.define('userBudget', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  income: type.INTEGER,
  incomeModifier: type.INTEGER,
  outcome: type.INTEGER,
  spent: type.FLOAT,
  savings: type.INTEGER,
  idUser: {
    type: type.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
});
