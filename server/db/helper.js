const { Course, Concept, Answer, } = require('./index');

const getCourses = () => Course.findAll({
  attributes: ['id', 'idParent', 'topic'],
});

module.exports.getCourses = getCourses;
