const router = require('express').Router();
const {
  getBudget,
  setBudget,
  spendBudget,
  updateBudget,
} = require('../db/helper');

// Endpoint to get user's saved budget info by id
router.get('/budget/:id', (req, res) => {
  const { id } = req.params;
  getBudget(id)
    .then((budgetData) => {
      res.json(budgetData);
    })
    .catch((err) => console.error(err));
});

// Endpoint to create user's budget
router.post('/budget/:id', (req, res) => {
  const { id } = req.params;
  setBudget(id, req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => console.error(err));
});

// Endpoint to update user's budget
router.patch('/budget/:id', (req, res) => {
  const { id } = req.params;
  updateBudget(id, req.body)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => console.error(err));
});

// Endpoint to update user's spent amount in their budget
router.patch('/budget/spend/:id', (req, res) => {
  const { id } = req.params;
  const { spend } = req.body;
  spendBudget(id, spend)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
