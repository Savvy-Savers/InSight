const {
  Course,
  Concept,
  Answer,
  User,
  UserBadge,
}
 = require('./index.js');


const enterFakeData = () => {

  Course.create({
    idParent: null,
    topic: 'Budgeting 101',
    description: 'This is a great course on budgeting',
    idBadge: 1,
  });

  Course.create({
    idParent: 1,
    topic: 'Budgeting 102',
    description: 'This is a continuing course on budgeting',
    idBadge: 2,
  });

  Course.create({
    idParent: 1,
    topic: 'Budgeting 103',
    description: 'This is a continuing course on budgeting',
    idBadge: 3,
  });

  Course.create({
    idParent: null,
    topic: 'Taxes 101',
    description: 'What are taxes?',
    idBadge: 4,
  });

  Concept.create({
    idCourse: 1,
    question: 'What is a budget tool?',
    description: 'We are discussing the concept of budget tools',
  });

  Concept.create({
    idCourse: 1,
    question: 'How do you create a budget?',
    description: 'this is not a bad thing to know',
  });

  Answer.create({
    choice: 'you buy everything',
    description: 'No, dont do that!',
    isCorrect: false,
    idConcept: 1,
  });

  Answer.create({
    choice: 'you plan it out',
    description: 'Yes, dont do that!',
    isCorrect: true,
    idConcept: 1,
  });

  Answer.create({
    choice: 'you cry',
    description: 'budgeting isnt that bad!',
    isCorrect: false,
    idConcept: 1,
  });
};

module.exports = { enterFakeData };
