const {
  Course,
  Concept,
  Answer,
  UserBadge,
  Badge
} = require('./index');

const getCourses = () => Course.findAll({
  attributes: ['id', 'idParent', 'topic'],
});

const getUser = (userId) => User.findOne({
  where: {
    id: userId,
  },
  attributes: { exclude: ['createdAt', 'updatedAt'] },
});

const getCourse = (id) => {
  let courseData;
  return Course.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  })
    .then((course) => {
      courseData = course.dataValues;
      return Concept.findAll({
        where: {
          idCourse: id,
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'idCourse'],
        },
      });
    })
    .then((concepts) => {
      courseData.concepts = concepts.map((concept) => concept.dataValues);
      const conceptIds = concepts.map((concept) => concept.id);
      return Answer.findAll({
        where: {
          idConcept: conceptIds,
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
    })
    .then((answers) => {
      const answersData = answers.map((answer) => answer.dataValues);
      answersData.forEach((answer) => {
        courseData.concepts.forEach((concept) => {
          if (answer.idConcept === concept.id) {
            if (concept.answers) {
              concept.answers.push(answer);
            } else {
              // eslint-disable-next-line no-param-reassign
              concept.answers = [answer];
            }
          }
        });
      });
      return courseData;
    });
};

const getUserBadges = (userId) => UserBadge.findAll({ 
  
  where: {
    idUser: userId,
  },
  
  attributes: ['idBadge'],
})
.then((badges) => {

});

module.exports = {
  getCourses,
  getCourse,
  getUser,
  getUserBadges
};

