module.exports = (sequelize, type) => sequelize.define('userLoan', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  loan: type.INTEGER,
  loanBalance: type.INTEGER,
  monthlyPayment: type.INTEGER,
  loanInterest: type.INTEGER,
  idUser: {
    type: type.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
});