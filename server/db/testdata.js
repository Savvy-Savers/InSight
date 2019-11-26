const { Course } = require('./index.js');


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

  


};

module.exports = { enterFakeData };
