import 'dotenv/config'
import './module/db.module.js'
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import userRouter from './routes/users.routes.js';
import authRouter from './routes/auth.routes.js';

const url = import.meta.url
const app = express();

// view engine setup
app.set('views', path.join(path.dirname(url)), 'views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.dirname(url), 'public')));

app.use('/users', userRouter);
app.use('/auth',authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message)
});

export default app
