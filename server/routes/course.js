const router = require('express').Router();
const {
  getCourse,
  getCourses,
  getCourseBadge,
  updateUserXp,
  insertUserBadge,
} = require('../db/helper');

// Endpoint to retrieve a single course from id
router.get('/list/:id', (req, res) => {
  const { id } = req.params;
  getCourse(id)
    .then((course) => {
      res.json(course);
    })
    .catch((err) => {
      console.error(err);
    });
});

// Endpoint to retrieve all courses
router.get('/list', (req, res) => {
  getCourses()
    .then((courses) => {
      res.json(courses);
    })
    .catch((err) => {
      console.error(err);
    });
});

// Endpoint to retrieve the badge for the course
router.get('/badge/:badgeId', (req, res) => {
  const { badgeId } = req.params;
  getCourseBadge(badgeId).then((badge) => {
    res.json(badge);
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

module.exports = router;
