'use strict'
let Sequelize = require('sequelize');
let db = require('../index.js');

module.exports = db.define('user', {
  name: Sequelize.STRING
})
