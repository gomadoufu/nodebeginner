function route(handle, pathname, response, postData) {
  console.log('About to route a request for ' + pathname);
  if (handle.has(pathname)) {
    handle.get(pathname)(response, postData);
    return;
  }
  console.error('No request handler found for' + pathname);
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('404 Not found');
  response.end();
}

exports.route = route;
