const createError = require('http-errors')
const express = require('express');
const dotenv = require('dotenv')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const departementsRouter = require('./routes/departements')

const app = express();
dotenv.config()

// view engine setup
app.set('views', 'views')
app.set('view engine', 'pug') // hbs, ejs

// middlewares
app.use(express.json()) 
app.use(express.urlencoded()) 
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/departements', departementsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})


// error handler
app.use(function(err, req, res) {
  // set locals,and only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(process.env.PORT, () => console.log(`Server is Up, Port: ${process.env.PORT}`))
