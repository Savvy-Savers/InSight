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
      description: 'Taxes are compulsory financial charge or some other type of levy imposed upon a taxpayer by a governmental organization in order to fund various public expenditures. ',
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
      description: 'A bugeting tool is a tracker of allowance or provision of an amount of money for a purpose.',
    }))
    .then(() => Concept.create({
      idCourse: 1,
      question: 'How do you create a budget?',
      description: 'The key to creating a good budget is to determine income, calculate expenses, and set financial goals!',
    }))
    .then(() => Concept.create({
      idCourse: 2,
      question: 'What is the 50 20 30 budget rule?',
      description: 'The 50 20 30 budget rule is a suggestion that you spend 50% of your after-tax income on needs, 30% on wants, and 20% to savings.',
    }))
    .then(() => Concept.create({
      idCourse: 3,
      question: 'Andanced budgeting info here',
      description: 'We are talking about the big stuff now',
    }))
    .then(() => Concept.create({
      idCourse: 4,
      question: 'What are taxes?',
      description: 'Taxes are collected by governments used for the betterment of the economy and all living in it. ',
    }))
    .then(() => Concept.create({
      idCourse: 5,
      question: 'What is true gibberish on advanced taxes',
      description: 'It is time to talk about advanced taxes ',
    }))
    .then(() => Concept.create({
      idCourse: 6,
      question: 'What are rainy day funds good for?',
      description: 'It is a smart thing to have some money stashed away if you can.',
    }))
    .then(() => Concept.create({
      idCourse: 7,
      question: 'Investing? What are some ways to do that?',
      description: 'Lets figoure out some ways to invest',
    }))
    .then(() => Concept.create({
      idCourse: 8,
      question: 'Are loans free money?',
      description: 'why would you think that?',
    }))
    .then(() => Concept.create({
      idCourse: 9,
      question: 'What are Origination fees?',
      description: 'Discussing origininating fees',
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
    .then(() => Answer.create({
      choice: 'This is true',
      description: 'Truth!',
      isCorrect: true,
      idConcept: 4,
    }))
    .then(() => Answer.create({
      choice: 'This is more falsely',
      description: 'Whoo you are pretty frugal! Not a bad thing, yet this isn\'t the saying',
      isCorrect: false,
      idConcept: 4,
    }))
    .then(() => Answer.create({
      choice: 'This is more false',
      description: 'Yep, wrong',
      isCorrect: false,
      idConcept: 4,
    }))
    .then(() => Answer.create({
      choice: 'They are fees for living',
      description: 'The first federal income tax was imposed in the 1860s ',
      isCorrect: false,
      idConcept: 5,
    }))
    .then(() => Answer.create({
      choice: 'Taxes are Voluntary in the US ',
      description: 'The government compels taxation through an implicit or explicit threat of force. ',
      isCorrect: true,
      idConcept: 5,
    }))
    .then(() => Answer.create({
      choice: 'Taxes are a longheld institutional governmental fee to pay the rich ',
      description: 'Early taxes were used to support ruling classes, raise armies and build defenses. Modern taxes are more distributed',
      isCorrect: false,
      idConcept: 5,
    }))
    .then(() => Answer.create({
      choice: 'This is gibberish, we need test data',
      description: 'I am sorry, no time to play ',
      isCorrect: false,
      idConcept: 6,
    }))
    .then(() => Answer.create({
      choice: 'More gibberish ',
      description: 'Maybe ask aunt Sally',
      isCorrect: false,
      idConcept: 6,
    }))
    .then(() => Answer.create({
      choice: 'True gibberish',
      description: 'Surprises! Pet needs an emergency vet visit!',
      isCorrect: true,
      idConcept: 6,
    }))
    .then(() => Answer.create({
      choice: 'Invest by buying hoards of beanie babies to sell on eBay in 30 years',
      description: 'This didnt work out well for grandma',
      isCorrect: false,
      idConcept: 7,
    }))
    .then(() => Answer.create({
      choice: 'Start off buying the most expensive diamond you can',
      description: 'Whatever!',
      isCorrect: false,
      idConcept: 7,
    }))
    .then(() => Answer.create({
      choice: 'Start off small or large, but not more than you\'re debt',
      description: 'YaY! you know how it invest smartly',
      isCorrect: true,
      idConcept: 7,
    }))
    .then(() => Answer.create({
      choice: 'Yes',
      description: 'Are you paying attention?',
      isCorrect: false,
      idConcept: 8,
    }))
    .then(() => Answer.create({
      choice: 'If you put them off long enough, they will be',
      description: 'Not really the right answer here',
      isCorrect: false,
      idConcept: 8,
    }))
    .then(() => Answer.create({
      choice: 'No',
      description: 'Correct, loans are not free monies',
      isCorrect: true,
      idConcept: 8,
    }))
    .then(() => Answer.create({
      choice: 'A penalty fee for paying your loan off early ',
      description: 'Nope',
      isCorrect: false,
      idConcept: 9,
    }))
    .then(() => Answer.create({
      choice: 'A fee from the store what you bought came from',
      description: 'Not really the right answer here',
      isCorrect: false,
      idConcept: 9,
    }))
    .then(() => Answer.create({
      choice: 'A fee to cover the cost of processing the loan.',
      description: 'Origination fees typically range from 1 to 6% of the loan amount',
      isCorrect: true,
      idConcept: 9,
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
    }))
    .then(() => {
      Level.create({
        id: 1,
        name: 'budget101',
        experiencePointsThreshold: 100,
      });
    })
    .then(() => {
      Level.create({
        id: 2,
        name: 'budget102',
        experiencePointsThreshold: 200,
      });
    })
    .then(() => {
      Level.create({
        id: 3,
        name: 'budget103',
        experiencePointsThreshold: 300,
      });
    });
};

module.exports = { enterFakeData };
