'use strict';
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
// db.Sequelize = Sequelize; --> db안에서 Sequelize 넣어 다른 곳에서 인스턴스를 만들어 사용할 목적이었는데 사실상 필요가 없다.

module.exports = db;
