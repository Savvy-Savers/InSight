module.exports = (sequelize, type) => sequelize.define('course', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  topic: type.STRING,
  description: type.STRING,
  idBadge: type.INTEGER,
  idParent: {
    type: type.INTEGER,
    allowNull: true,
    references: {
      model: 'courses',
      key: 'id',
    },
  },
});
