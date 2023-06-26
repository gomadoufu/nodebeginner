const http = require('http');

function start(route, handle) {
  function onRequest(request, response) {
    let postData = '';
    const pathname = new URL(request.url, 'http://RELATIVE/').pathname;
    console.log('Request for ' + pathname + ' received.');
    request.setEncoding('utf8');
    request.addListener('data', (postDataChunk) => {
      postData += postDataChunk;
      console.log("Received POST data chunk '" + postDataChunk + "'.");
    });

    request.addListener('end', () => {
      route(handle, pathname, response, postData);
    });
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;
