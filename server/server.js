/**
 * set up express server at localhost:5000
 */
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.set('port', (process.env.PORT || 5000));

// static file
app.use(express.static(path.join(__dirname, '../client', 'public')));

// view engine setup
app.set('views', path.join(__dirname, '../client', 'view'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// express middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// jump to index.html
app.get('/', function(req, res) {
  res.render('index');
});

// start server
app.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + app.get('port'));
  if (process.send) {
    process.send('online');
  }
});
