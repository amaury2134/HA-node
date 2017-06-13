var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
const context = {
  tittle: 'Profile',
  name: 'Amaury',
  age: '5',
  position:'Student',
  hobbies: ['videogames', 'sports', 'music', 'random stuff'],
}
 res.render('profile', context);
 });
 module.exports = router;
