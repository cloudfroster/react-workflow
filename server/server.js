//---------------------------------------------------------------------
//  use json-server set up express mock server at localhost:5000
//---------------------------------------------------------------------
const path = require('path')
const chalk = require('chalk')
const logger = require('morgan')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const http = require('http')
const app = express()
const server = http.createServer(app)
//-------------------------------------------------------------------
//  set up virtual remote server proxy
//-------------------------------------------------------------------
const httpProxy = require('http-proxy')
const isProxy = false
const config = {
  apiHost: 'localhost',
  apiPort: 5001,
}
const proxy = httpProxy.createProxyServer({
  target: `http://${config.apiHost}:${config.apiPort}`,
  ws: true,
})
if(isProxy) {
  // start remote server
  require('./remote/remoteServer')
  app.all(/^\/api/, (req, res) => {
    proxy.web(req, res)
  })
  // Listen for the `error` event on `proxy`.
  proxy.on('error', function (err, req, res) {
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    })

    res.end('Something went wrong. The http-proxy has shut down')
  })
  console.log(`The proxy server to proxy '/api' at http://${config.apiHost}:${config.apiPort}`)
} else {
  app.use('/api', jsonServer.router(path.join(__dirname, './api/mock.json')))
}
//-------------------------------------------------------------------
//  end
//-------------------------------------------------------------------
app.set('port', (process.env.PORT || 5000))
app.set('env', 'development')

// static file
app.use(express.static(path.join(__dirname, '../build')))

// express middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// jump to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})


// start server
server.listen(app.get('port'), () => {
  /* eslint-disable no-console */
  console.log(chalk.cyan(`The server is running at http://localhost:${app.get('port')}`))
  if (process.send) {
    process.send('online')
  }
})
