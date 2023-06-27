import http from 'node:http';

function start(route, handle) {
  function onRequest(request, response) {
    let postData = '';
    const pathname = new URL(request.url, 'http://RELATIVE/').pathname;
    console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

export { start };
