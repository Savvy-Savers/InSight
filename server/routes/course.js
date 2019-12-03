const router = require('express').Router();
const { getCourse, getCourses } = require('../db/helper');

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

module.exports = router;
