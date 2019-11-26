require('dotenv').config();
const Sequelize = require('sequelize');
const courseModel = require('./model/course');
const conceptModel = require('./model/concept');
const answerModel = require('./model/answer');
const userModel = require('./model/user');
const userBadgeModel = require('./model/userbadge');
const userBudgetModel = require('./model/userbudget');
const badgeModel = require('./model/badge');
const levelModel = require('./model/level');

const {
  dialect,
  host,
  user,
  pwd,
  database,
} = process.env;

const options = {
  host,
  dialect,
};

const db = new Sequelize(database, user, pwd, options);
// models
const Course = courseModel(db, Sequelize);
const Concept = conceptModel(db, Sequelize);
const Answer = answerModel(db, Sequelize);
const User = userModel(db, Sequelize);
const UserBadge = userBadgeModel(db, Sequelize);
const Userbudget = userBudgetModel(db, Sequelize);
const Level = levelModel(db, Sequelize);
const Badge = badgeModel(db, Sequelize);

// create connection to DB
db.sync({ force: true })
  .then(() => {
    console.log('connected to database!');
  })

  .catch((err) => {
    console.error(err);
  });

module.exports = {
  Course,
  Concept,
  Answer,
  User,
  UserBadge,
  Userbudget,
  Badge,
  Level,
};
