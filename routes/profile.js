const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('profile', { title: 'Express' });
});

module.exports = router;
