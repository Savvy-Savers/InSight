const router = require('express').Router();
const { getUser, updateUserXp, insertUserBadge, getUserBadges } = require('../db/helper');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// route to get user by id
router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  getUser(id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => console.error(err));
});

router.get('/user/:id/badges', (req, res) => {
  const { id } = req.params;

  getUserBadges(id)
    .then((badges) => {
      res.send(badges);
    })
    .catch((err) => console.error(err));
});

router.post('/user/badge', (req, res) => {
  console.log(req.body);
  const userId = req.body.id;
  const userBadge = req.body.badgeId;
  updateUserXp(userId, userBadge)
    .then(() => {
      return insertUserBadge(userId, userBadge);
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
