const router = require('express').Router();
const {
  getUser,
  updateUserXp,
  insertUserBadge,
  getUserBadges,
  getCompletedCourse,
  saveUser,
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

// Endpoint to create user badge connection when they complete a course
router.post('/user/:id/badge/:badgeId', (req, res) => {
  const { id, badgeId } = req.params;
  updateUserXp(id, badgeId)
    .then(() => insertUserBadge(id, badgeId))
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post('/user/', (req, res) => {
  console.log(req);
  const { id, email } = req.body;
  saveUser(id, email)
    .then(() => {
      res.send(201);
    })
    .catch((err) => console.error(err));
});


module.exports = router;
