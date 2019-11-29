const router = require('express').Router();
const { getUser, getUserBadges } = require('../db/helper');

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
    .then((badge) => {
      res.send(badge);
    })
    .catch((err) => console.error(err));
})

module.exports = router;
