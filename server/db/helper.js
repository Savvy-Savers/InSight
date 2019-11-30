const {
  Course,
  Concept,
  Answer,
  UserBadge,
  User,
  Badge,
} = require('./index');

const insertUserBadge = (userId, badgeId) => UserBadge.create({
  idUser: userId,
  idBadge: badgeId,
});

const updateUserXp = (userId, badgeId) => {
  return Badge.findOne({
    where: {
      id: badgeId,
    },
    attributes: ['experiencePoints'],
  })
    .then((xp) => {
      User.increment({
        totalExperiencePoints: xp.dataValues.experiencePoints,
      }, {
        where: { id: userId },
      });
    })
    .catch((err) => {
      console.error(err);
    });
};


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
    idUser: userId
  },

  attributes: ['idBadge']
})
.then((badges) => {
  let badgeInfo = badges.map((badge) => badge.dataValues.idBadge);
  
  return Badge.findAll({
    where: {
      id: badgeInfo,
    },
    
    attributes: ['name', 'iconUrl', 'description']
  });
});

//function takes in a userId
//function returns list of courseId
//course completion is based of acquired badges
const getCompletedCourse = (userId) => UserBadge.findAll({
  where: {
    idUser: userId
  },

  attributes: ['idBadge']
})
.then((badgesId) => {
  badgesId = badgesId.map((badgeId) => badgeId.dataValues.idBadge)
  
  return Course.findAll({
    where: {
      idBadge: badgesId
    },

    attributes: ['id']
  })
})


module.exports = {
  getCourses,
  getCourse,
  getUser,
  getUserBadges,
  updateUserXp,
  insertUserBadge,
  getCompletedCourse
};
