const http = require('http');

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = new URL(request.url, 'http://RELATIVE/').pathname;
    console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response);
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;
