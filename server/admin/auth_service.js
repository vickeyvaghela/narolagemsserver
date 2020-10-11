const models = require('express').Router();

models.get('/', (req, res) => {
  res.send('default route for auth service ADMIN');
});

models.get('/login', (req, res) => {
  res.json('login method for auth service ADMIN');
});

models.get('/signup', (req, res) => {
  res.send('signup method for auth service ADMIN');
});


module.exports = models;
