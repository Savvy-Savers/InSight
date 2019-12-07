module.exports = (sequelize, type) => sequelize.define('userLoan', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  loan: type.STRING,
  loanBalance: type.INTEGER,
  monthlyPayment: type.FLOAT,
  loanInterest: type.FLOAT,
  idUser: {
    type: type.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
});