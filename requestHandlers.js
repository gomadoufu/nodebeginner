const querystring = require('querystring');

function start(response, _) {
  console.log("Request handler 'start' was called.");
  const body =
    '<!DOCTYPE html>' +
    '<html lang="ja">' +
    '<head>' +
    '  <meta charset="UTF-8">' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '  <title>Document</title>' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write("You've sent: " + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
