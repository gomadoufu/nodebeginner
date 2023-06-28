import http from 'node:http';

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = new URL(request.url, 'http://RELATIVE/').pathname;
    console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started on port 8888.');
}

export { start };
