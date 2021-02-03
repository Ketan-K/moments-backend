var dotenv = require('dotenv');
var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var Promise = require('bluebird');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var momentRouter = require('./routes/moments');

var addServices = require('./controllers/init');

dotenv.config();
global.Promise = Promise;

var app = express();

const addMiddlewares = async () => {
  app.use(cors({ credentials: true, origin: true }));
  app.use(logger('dev'));
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
  app.use(express.static(`${__dirname}/public`));
};

const addRoutes = () => {
  app.use('/', indexRouter);
  app.use('/user', authRouter);
  app.use('/moment', momentRouter);

  app.use((req, res) => res.status(404).send({ error: 'Not found' }));

};

const start = async () => {
  try {
    await addMiddlewares();
    await addServices();
    addRoutes();
  } catch (error) {
    console.error('Error', error);
  }
};

start();

module.exports = app;
