
require('dotenv').config();
const User = require('./db/User.js');
const Sequelize = require('sequelize');
const express = require('express');
const app = express();
// const port = 8080;

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

const Users = User(db, Sequelize);

// create connection to DB
db.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');

    })
    .then(() => {
        Users.create({
            id: 1, 
            full_name: 'chris ',
            email: 'tituse@fjfjf',
            amount: '11',
        });
            
    })

    .catch((err) => {
        console.error(err);
    })
const bodyParser = require('body-parser');
// const port = 8080;

const profileRoutes = require('./routes/profile');
const courseRoutes = require('./routes/course');
const toolRoutes = require('./routes/tool');

app.use(bodyParser.json());

// Routes for the app
app.use('/profile', profileRoutes);
app.use('/course', courseRoutes);
app.use('/tool', toolRoutes);

// app.listen(port, () => console.log(`Listening on port ${port}`));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));