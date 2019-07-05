var connect = require('connect');
var serveStatic = require('serve-static');
var logger = require('morgan');
connect()
  .use(logger('dev'))
  .use(serveStatic(__dirname))
  .use(serveStatic(__dirname + '/../lib/'))
  .listen(8080);
console.log('Server running at http://0.0.0.0:8080/');
