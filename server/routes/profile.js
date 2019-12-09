const router = require('express').Router();
const {
  getUser,
  getUserById,
  updateToken,
  getUserBadges,
  getCompletedCourse,
  saveUser,
} = require('../db/helper');

// Endpoint to get user profile info by token
router.get('/user/:token', (req, res) => {
  const { token } = req.params;
  getUser(token)
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
    givenName,
    familyName,
    id,
    photoUrl,
  } = req.body.user;
  const { accessToken } = req.body;
  getUserById(id)
    .then((user) => {
      if (user) {
        return updateToken(id, accessToken);
      }
      return saveUser(givenName, familyName, id, accessToken, photoUrl);
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => console.error(err));
});


module.exports = router;
