var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;

console.log('ku');

// add(2, 3)(4)(5, 6) // 20
// add(2)(3)(1);
// z = add(2)(3)(7,4);
// z = add(2)(7)(5);
/*
z = f(2)(7)(5)();
// z = foo(2)(7)(5)(2);
// z = addd(2)(7); //(5)(2);

console.log(z);

function addd(a, b) {
  count = 0;
  var value;

  console.log(value);



  // if (b !== undefined) {
  //   return function (a, b) {
  //     return value = a + b;
  //   };
  // } else {
  //   return function (b) {
  //     return value = a + b;
  //   }
  // }
}

function f(arg, b = null) {
  var value = arg;

  return function (arg) {
    if (arg !== undefined) {
      return f(value + arg);
    } else {
      return value;
    }
  }
}

function foo(value) {
  var acc = value;

  function addNext(next) {
    acc += next;
    return addNext;
  }

  addNext.toString = addNext.valueOf = function() {
    return acc;
  };

  return addNext;
}
*/



// function add(item) {
//   return (item) => {
//     item *= item;
//     console.log(item);
//   }
// }
/*

const add = (a) => {
  let sum = a;

  const func = (b) => {
    sum += b;
    return func;
  };

  func.valueOf = () => sum;
  return func;
};

console.log(add(2)(3)); // 5;*/

function add(){
  let args = [].slice.apply(arguments);

  function resultFn(){
    args = args.concat([].slice.apply(arguments));

    if(args.length>=3){
      return args.slice(0,3).reduce(function(acc,next){
        return acc+next
      }, 0); //will only sum first 3 arguments
    }
    return resultFn;
  }
  return resultFn();
}

// q = add(2)(3)(4) //output: 9
// w =  add(2,3,4) //output: 9
// e = add(2)(3,4) //output: 9
// r = add(2,3)(4) //output: 9

// console.log(q);
// console.log(w);
// console.log(e);
// console.log(r);
// console.log();
