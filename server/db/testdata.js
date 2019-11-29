
const enterFakeData = (
  Course,
  Concept,
  Answer,
  User,
  UserBadge,
  UserBudget,
  Badge,
  Level) => {
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
    description: 'This is a description on the taxes course',
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

  Answer.create({
    choice: 'you do nothing',
    description: 'no you have to do something',
    isCorrect: false,
    idConcept: 2,
  });

  Answer.create({
    choice: 'you make it yourself',
    description: 'yes! know your budget',
    isCorrect: true,
    idConcept: 2,
  });

  Answer.create({
    choice: 'you have your cousin do it',
    description: 'maybe you should take charge of your financial life',
    isCorrect: false,
    idConcept: 2,
  });
  
  User.create({
    firstName: 'Amber',
    lastName: 'Jones',
    totalExperiencePoints: 9999,
    goal: 'to become a dog mother',
  });

  User.create({
    firstName: 'Titus',
    lastName: 'Charles',
    totalExperiencePoints: 504,
    goal: 'to get a job',
  });

  User.create({
    firstName: 'Brandon',
    lastName: 'T',
    totalExperiencePoints: 1010,
    goal: 'go to Thailand',
  });

  User.create({
    firstName: 'Eliott',
    lastName: 'Frilet',
    totalExperiencePoints: 42,
    goal: 'own all the wallpapers',
  });

  
};

module.exports = { enterFakeData };
