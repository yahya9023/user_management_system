var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'omma', users: [
    {
      id: 1,
      name: 'yahya'
    },
    {
      id: 2,
      name: 'omma'
    },
  ] });
});

module.exports = router;
