let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let passport = require('passport')

// Route import
let profileRouter = require('./routes/api/profile');
let usersRouter = require('./routes/api/users');
let postRouter = require('./routes/api/posts');

// Database configuration import
const config = require('./config/keys');
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
    .connect(config.mongoURI, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


let app = express();


// Initialize Passport
app.use(passport.initialize())
require('./config/passport')(passport)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postRouter);


// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'))
//
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
