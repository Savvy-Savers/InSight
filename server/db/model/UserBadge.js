module.exports = (sequelize, type) => sequelize.define('userBadge', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUser: {
    type: type.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  idBadge: {
    type: type.INTEGER,
    references: {
      model: 'badge',
      key: 'id',
    },
  },
});
