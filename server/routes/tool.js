const router = require('express').Router();
const { getBudget, setBudget } = require('../db/helper');

// Endpoint to get user's saved budget info by id
router.get('/budget/:id', (req, res) => {
  const { id } = req.params;
  getBudget(id)
    .then((budgetData) => {
      res.json(budgetData);
    })
    .catch((err) => console.error(err));
});

router.post('/budget/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  setBudget(id, req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
