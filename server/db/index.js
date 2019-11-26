require('dotenv').config();
const Sequelize = require('sequelize');
const courseModel = require('./model/course');

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

const Course = courseModel(db, Sequelize);

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
};
