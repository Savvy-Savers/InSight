const {
  Course,
  Concept,
  Answer,
  UserBadge,
  User,
  Badge,
  UserBudget,
} = require('./index');

/**
 * Inserts the user and badge connection into the UserBadge table.
 * @param {integer} userId - The user's ID.
 * @param {integer} badgeId - The badge's ID.
 */
const insertUserBadge = (userId, badgeId) => UserBadge.create({
  idUser: userId,
  idBadge: badgeId,
});

/**
 * Updates the user's experience points based on the given badge's points.
 * @param {integer} userId - The user's ID.
 * @param {integer} badgeId - The badge's ID.
 */
const updateUserXp = (userId, badgeId) => Badge.findOne({
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

/**
 * Gets the id, idParent, and topic for all the courses.
 */
const getCourses = () => Course.findAll({
  attributes: ['id', 'idParent', 'topic'],
});

/**
 * Gets the user's profile info.
 * @param {string} googleId- The users's google id
 */
const getUser = (googleId) => User.findOne({
  where: {
    googleId,
  },
  attributes: { exclude: ['createdAt', 'updatedAt', 'email', 'id'] },
});

/**
 * Saves the user's profile info.
 * @param {string} email- The users's Email.
 * @param {string} givenName- The users's first name.
 * @param {string} familyName- The users's last name.
 * @param {integer} id-The user's google id
 */

const saveUser = (
  email,
  givenName,
  familyName,
  id,
) => User.create({
  googleId: id,
  email,
  givenName,
  familyName,
});


/**
 * Gets the course id, the course's concepts, and each concepts' answers.
 * @param {integer} courseId - The course's ID.
 */
const getCourse = (courseId) => {
  let courseData;
  return Course.findOne({
    where: {
      id: courseId,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  })
    .then((course) => {
      courseData = course.dataValues;
      return Concept.findAll({
        where: {
          idCourse: courseId,
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

const getCourseBadge = (badgeId) => Badge.findOne({
  where: {
    id: badgeId,
  },
  // attributes: ['experiencePoints'],
})
  .catch((err) => {
    console.error(err);
  });

/**
 * Gets the user's acquired badges.
 * @param {integer} userId - The user's ID.
 */
const getUserBadges = (userId) => UserBadge.findAll({
  where: {
    idUser: userId,
  },
  attributes: ['idBadge'],
})
  .then((badges) => {
    const badgeInfo = badges.map((badge) => badge.dataValues.idBadge);
    return Badge.findAll({
      where: {
        id: badgeInfo,
      },
      attributes: ['name', 'iconUrl', 'description'],
    });
  });

/**
 * Gets a list of course ids for the user's completed courses.
 * @param {integer} userId - The user's ID.
 */
const getCompletedCourse = (userId) => UserBadge.findAll({
  where: {
    idUser: userId,
  },
  attributes: ['idBadge'],
})
  .then((badgesId) => Course.findAll({
    where: {
      idBadge: badgesId.map((badgeId) => badgeId.dataValues.idBadge),
    },
    attributes: ['id'],
  }));

/**
 * Gets the user's saved budget data
 * @param {integer} userId - The user's ID.
 */
const getBudget = (userId) => UserBudget.findOne({
  where: {
    idUser: userId,
  },
  attributes: ['income', 'outcome', 'spent', 'savings', 'incomeModifier'],
});

/**
 * Sets the user's budget for the first time
 * @param {integer} userId - The user's ID.
 * @param {object} budget - Object with the user's budget info available
 * under the following keys: income, incomeModifier, outcome, and savings.
 */
const setBudget = (userId, budget) => UserBudget.create({
  income: budget.income,
  incomeModifier: budget.incomeModifier,
  outcome: budget.outcome,
  spent: 0,
  savings: budget.savings,
  idUser: userId,
});

/**
 * Incriment the user's spent field by the amount in spend
 * @param {integer} userId - The user's ID.
 * @param {object} budget - Object with the user's budget info available
 * under the following keys: income, incomeModifier, outcome, and savings.
 */
const updateBudget = (userId, budget) => UserBudget.update({
  income: budget.income,
  incomeModifier: budget.incomeModifier,
  outcome: budget.outcome,
  savings: budget.savings,
}, {
  where: {
    idUser: userId,
  },
});

/**
 * Incriment the user's spent field by the amount in spend
 * @param {integer} userId - The user's ID.
 * @param {object} spend - The amount the user is spending as a float
 */
const spendBudget = (userId, spend) => UserBudget.increment({
  spent: spend,
}, {
  where: {
    idUser: userId,
  },
});

module.exports = {
  getCourses,
  getCourse,
  getUser,
  getUserBadges,
  updateUserXp,
  insertUserBadge,
  getCompletedCourse,
  getCourseBadge,
  getBudget,
  setBudget,
  saveUser,
  spendBudget,
  updateBudget,
};
