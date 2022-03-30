var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  return res.json(
    {
      message: "Welcome to the users route"
    }
  );
});

module.exports = router;
