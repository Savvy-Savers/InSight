const router = require('express').Router();
const { getBudget } = require('../db/helper');

// Endpoint to get user's saved budget info by id
router.get('/budget/:id', (req, res) => {
  const { id } = req.params;
  getBudget(id)
    .then((budgetData) => {
      res.json(budgetData);
    });
});

module.exports = router;
