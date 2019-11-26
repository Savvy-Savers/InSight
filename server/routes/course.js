const router = require('express').Router();
const { getCourse, getCourses } = require('../db/helper');

// Endpoint to retrieve a single course from id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  getCourse(id) // TODO: create getCourse helper for DB
    .then((course) => {
      res.json(course);
    });
});

// Endpoint to retrieve all courses
router.get('/list', (req, res) => {
  getCourses() // TODO: create getCourses helper for DB
    .then((courses) => {
      res.json(courses);
    });
});

module.exports = router;
