// Test data to be created when server starts
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
    description: 'Introduction to Budgeting',
    idBadge: 1,
  })
    .then(() => Course.create({
      idParent: 1,
      topic: 'Budgeting 102',
      description: 'This is a continuing course on budgeting',
      idBadge: 2,
    }))
    .then(() => Course.create({
      idParent: 2,
      topic: 'Budgeting 103',
      description: 'This is an advanced course on budgeting',
      idBadge: 3,
    }))
    .then(() => Course.create({
      idParent: null,
      topic: 'Taxes 101',
      description: 'This is a description of the taxes course',
      idBadge: 4,
    }))
    .then(() => Course.create({
      idParent: 4,
      topic: 'Taxes 102',
      description: 'This is Taxes 102',
      idBadge: 5,
    }))
    .then(() => Course.create({
      idParent: null,
      topic: 'Rainy Day Funds',
      description: 'How to save for Emergencies',
      idBadge: 6,
    }))
    .then(() => Course.create({
      idParent: null,
      topic: 'Investing',
      description: 'Basic terminology of Investing',
      idBadge: 7,
    }))
    .then(() => Course.create({
      idParent: null,
      topic: 'Loans 101',
      description: 'Basic terminology of Loans',
      idBadge: 8,
    }))
    .then(() => Course.create({
      idParent: 8,
      topic: 'Loans 102',
      description: 'Advanced terminology of Loans',
      idBadge: 9,
    }))
    .then(() => Concept.create({
      idCourse: 1,
      question: 'What is a budget tool?',
      description: 'Tracker of allowance or provision of an amount of money for a purpose',
    }))
    .then(() => Concept.create({
      idCourse: 1,
      question: 'How do you create a budget?',
      description: 'Determine Income, Calculate Expenses, Set Financial Goals!',
    }))
    .then(() => Concept.create({
      idCourse: 2,
      question: 'What is the 50 20 30 budget rule?',
      description: 'Suggestion that you spend 50% of your after-tax income on needs, 30% on wants, and 20% to savings.',
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
    .then(() => Answer.create({
      choice: 'spend 50% on needs, 30% on wants, and 20% to savings',
      description: 'This is a great way to allocate your money into budget categories, especially for the first time!',
      isCorrect: true,
      idConcept: 3,
    }))
    .then(() => Answer.create({
      choice: 'spend 50% on wants, 30% on needs, and 20% to savings',
      description: 'We appreicate that you known what you want, but spending that much on wants is not condusive to balance',
      isCorrect: false,
      idConcept: 3,
    }))
    .then(() => Answer.create({
      choice: 'spend 50% on saving, 30% on needs, and 20% to wants',
      description: 'Whoo you are pretty frugal! Not a bad thing, yet this isn\'t the saying',
      isCorrect: false,
      idConcept: 3,
    }))
    .then(() => User.create({
      givenName: 'Amber',
      familyName: 'Jones',
      totalExperiencePoints: 50,
      goal: 'to become a dog mother',
    }))
    .then(() => User.create({
      givenName: 'Titus',
      familyName: 'Charles',
      totalExperiencePoints: 102,
      goal: 'to get a job',
    }))
    .then(() => User.create({
      givenName: 'Brandon',
      familyName: 'T',
      totalExperiencePoints: 300,
      goal: 'go to Thailand',
    }))
    .then(() => User.create({
      givenName: 'Eliott',
      familyName: 'Frilet',
      totalExperiencePoints: 202,
      goal: 'own all the wallpapers',
    }))
    .then(() => Badge.create({
      name: 'Budgetling',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/25-512.png',
      experiencePoints: 100,
      description: 'Growth you will achieve.',
    }))
    .then(() => Badge.create({
      name: 'Budgeteer',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/10-512.png',
      experiencePoints: 200,
      description: 'Yarr don\'t plunder ye savings',
    }))
    .then(() => Badge.create({
      name: 'Budgetor',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/19-512.png',
      experiencePoints: 300,
      description: 'I\'ll be bach to save some more money$',
    }))
    .then(() => Badge.create({
      name: 'Taxling',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/67-512.png',
      experiencePoints: 100,
      description: 'This money won\'t grow on trees',
    }))
    .then(() => Badge.create({
      name: 'Taxator',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/43-512.png',
      experiencePoints: 200,
      description: 'You\'re an expert with Taxes!',
    }))
    .then(() => Badge.create({
      name: 'Savvy Saver',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/26-512.png',
      experiencePoints: 200,
      description: 'Lookout world, nothing\'s going to get you down!',
    }))
    .then(() => Badge.create({
      name: 'GrowthSpurt',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/1-512.png',
      experiencePoints: 300,
      description: 'You\'re on your way up!',
    }))
    .then(() => Badge.create({
      name: 'Loaner',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/74-512.png',
      experiencePoints: 300,
      description: 'Whoh, you\'re the cool kid on the block now',
    }))
    .then(() => Badge.create({
      name: 'Loan Musketeer',
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-startup-10/50/34-512.png',
      experiencePoints: 600,
      description: 'You\'re well equiped for a future in finance..',
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
    .then(() => UserBudget.create({
      income: 60000,
      incomeModifier: 12,
      outcome: 2000,
      spent: 0,
      savings: 750,
      idUser: 1,
    }));
};

module.exports = { enterFakeData };