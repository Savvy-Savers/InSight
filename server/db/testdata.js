
const enterFakeData = (
  Course,
  Concept,
  Answer,
  User,
  UserBadge,
  UserBudget,
  Badge,
  Level,
) => {
  Course.create({
    idParent: null,
    topic: 'Budgeting 101',
    description: 'This is a great course on budgeting',
    idBadge: 1,
  })
  .then(() => Course.create({
    idParent: 1,
    topic: 'Budgeting 102',
    description: 'This is a continuing course on budgeting',
    idBadge: 2,
  }))
  .then(() => Course.create({
    idParent: 1,
    topic: 'Budgeting 103',
    description: 'This is a continuing course on budgeting',
    idBadge: 3,
  }))
  .then(() => Course.create({
    idParent: null,
    topic: 'Taxes 101',
    description: 'This is a description on the taxes course',
    idBadge: 4,
  }))
  .then(() => Concept.create({
    idCourse: 1,
    question: 'What is a budget tool?',
    description: 'We are discussing the concept of budget tools',
  }))
  .then(() => Concept.create({
    idCourse: 1,
    question: 'How do you create a budget?',
    description: 'this is not a bad thing to know',
  }))
  .then(() => Answer.create({
    choice: 'you buy everything',
    description: 'No, dont do that!',
    isCorrect: false,
    idConcept: 1,
  }))
  .then(() => Answer.create({
    choice: 'you plan it out',
    description: 'Yes, dont do that!',
    isCorrect: true,
    idConcept: 1,
  }))
  .then(() => Answer.create({
    choice: 'you cry',
    description: 'budgeting isnt that bad!',
    isCorrect: false,
    idConcept: 1,
  }))
  .then(() => Answer.create({
    choice: 'you do nothing',
    description: 'no you have to do something',
    isCorrect: false,
    idConcept: 2,
  }))
  .then(() => Answer.create({
    choice: 'you make it yourself',
    description: 'yes! know your budget',
    isCorrect: true,
    idConcept: 2,
  }))
  .then(() => Answer.create({
    choice: 'you have your cousin do it',
    description: 'maybe you should take charge of your financial life',
    isCorrect: false,
    idConcept: 2,
  }))
  .then(() => User.create({
    firstName: 'Amber',
    lastName: 'Jones',
    totalExperiencePoints: 50,
    goal: 'to become a dog mother',
  }))
  .then(() => User.create({
    firstName: 'Titus',
    lastName: 'Charles',
    totalExperiencePoints: 102,
    goal: 'to get a job',
  }))
  .then(() => User.create({
    firstName: 'Brandon',
    lastName: 'T',
    totalExperiencePoints: 300,
    goal: 'go to Thailand',
  }))
  .then(() => User.create({
    firstName: 'Eliott',
    lastName: 'Frilet',
    totalExperiencePoints: 202,
    goal: 'own all the wallpapers',
  }))
  .then(() => Badge.create({
    name: 'Budgetling',
    iconUrl: 'https://image.flaticon.com/icons/svg/2250/2250687.svg',
    experiencePoints: 100,
    description: 'Growth you will achieve.',
  }))
  .then(() => Badge.create({
    name: 'Budgeteer',
    iconUrl: 'https://image.flaticon.com/icons/svg/2250/2250716.svg',
    experiencePoints: 200,
    description: 'Yarr don\'t plunder ye savings',
  }))
  .then(() => Badge.create({
    name: 'Budgetor',
    iconUrl: 'https://image.flaticon.com/icons/svg/2250/2250702.svg',
    experiencePoints: 300,
    description: 'I\'ll be bach to save some more money$',
  }))
  .then(() => Badge.create({
    name: 'Taxling',
    iconUrl: 'https://image.flaticon.com/icons/svg/2250/2250704.svg',
    experiencePoints: 400,
    description: 'This money won\'t grow on trees',
  }))
  .then(() => UserBadge.create({
    idUser: 1,
    idBadge: 1, 
  }))
  .then(() => UserBadge.create({
    idUser: 1,
    idBadge: 2,
  }))
  .then(() => UserBadge.create({
    idUser: 3,
    idBadge: 3,
  }))
  .then(() => UserBadge.create({
    idUser: 4,
    idBadge: 4,
  }))
};

module.exports = { enterFakeData };
