/**
 * set up express server at localhost:5000
 */
var express =require('express');
var logger =require('morgan');
var cookieParser =require('cookie-parser');
var bodyParser =require('body-parser');
var path =require('path');

const app = express();

app.set('port', (process.env.PORT || 5000));
app.set('env', 'development');

// static file
app.use(express.static(path.join(__dirname, '../static')));

// express middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// jump to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});


// start server
app.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + app.get('port'));
  if (process.send) {
    process.send('online');
  }
});
