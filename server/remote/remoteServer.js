//---------------------------------------------------------------------
//  Remote server(virtual host)
//---------------------------------------------------------------------
const path = require('path')
const colors = require('colors')
const logger = require('morgan')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
// Returns an Express server
const app = express()

app.set('port', (process.env.PORT || 5001))

// express middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Set default middlewares (logger, static, cors and no-cache)
app.use(jsonServer.defaults())
app.use('/api', jsonServer.router(path.join(__dirname, './api/db.json')))

// start server
app.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log(`The remote server is running at http://localhost:${app.get('port')}`.cyan)
  if (process.send) {
    process.send('online')
  }
})
