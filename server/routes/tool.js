const router = require('express').Router();
const { getBudget, setBudget, spendBudget } = require('../db/helper');

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
  setBudget(id, req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => console.error(err));
});

router.patch('/budget/:id', (req, res) => {
  const { id } = req.params;
  const { spend } = req.body;
  spendBudget(id, spend)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
