const {
  Course,
  Concept,
  Answer,
  User,
} = require('./index');

const getCourses = () => Course.findAll({
  attributes: ['id', 'idParent', 'topic'],
});

const getUser = (userId) => User.findAll({
  where: {
    id: userId,
  },
  attributes: { exclude: ['createdAt', 'updatedAt'] },
});


module.exports.getCourses = getCourses;
module.exports.getUser = getUser;
