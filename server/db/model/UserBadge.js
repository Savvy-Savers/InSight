module.exports = (sequelize, type) => sequelize.define('userBadge', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUser: {
    type: type.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  idBadge: {
    type: type.INTEGER,
    references: {
      model: 'badges',
      key: 'id',
    },
  },
});
