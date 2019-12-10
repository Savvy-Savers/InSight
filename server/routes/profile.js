const router = require('express').Router();
const {
  getUser,
  getUserBadges,
  getCompletedCourse,
  saveUser,
  getXpLevel,
  getUserXp,
} = require('../db/helper');

// Endpoint to get user profile info by id
router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  getUser(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.error(err));
});

// Endpoint to get user's completed badges by user id
router.get('/user/:id/badges', (req, res) => {
  const { id } = req.params;
  getUserBadges(id)
    .then((badges) => {
      res.json(badges);
    })
    .catch((err) => console.error(err));
});

// Endpoint to get user's completed course ids by user id
router.get('/user/:id/completed', (req, res) => {
  const { id } = req.params;
  getCompletedCourse(id)
    .then((coursesId) => {
      res.json(coursesId.map((course) => course.id));
    })
    .catch((err) => console.error(err));
});


router.post('/user', (req, res) => {
  const {
    email,
    givenName,
    familyName,
    id,
  } = req.body.user;
  saveUser(email, givenName, familyName, id)
    .then((user) => {
      //  console.log(user.dataValues);
      res.send(user.dataValues);
    })
    .catch((err) => console.error(err));
});

// Endpoint to get user's experience level
router.get('/user/:id/level', (req, res) => {
  const { id } = req.params;
  getUserXp(id)
    .then((userXp) => {
      return getXpLevel(userXp);
    })
    .then((level) => {
      console.log(level);
      res.send(level);
    })
    .catch((err) => console.error(err));
});


module.exports = router;
