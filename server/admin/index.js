const models = require('express').Router();

const auth_service = require('./auth_service');

models.use('/authService', auth_service);

models.get('/', (req, res) => {
  res.send('default route for ADMIN');
});

module.exports = models;
