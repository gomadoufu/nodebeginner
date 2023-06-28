import fs from 'fs';
import formidable from 'formidable';

function start(response) {
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
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="file" name="myFile"/>' +
    '<button>Upload</button>';
  '</form>' + '</body>' + '</html>';
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(body);
  response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  const form = formidable({ uploadDir: './tmp' });
  console.log('about to parse');

  form.parse(request, (_err, _fields, files) => {
    let oldPath = './tmp/' + files.myFile[0].newFilename;
    let newPath = './tmp/test.png';

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        throw err;
      }
      console.log('renamed the file');
    });

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('received image:<br/>');
    response.write("<img src='/show'/>");
    response.end();
  });
}

function show(response) {
  console.log("request handler 'show' was called.");
  fs.readFile('./tmp/test.png', 'binary', (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.write(error + '\n');
      response.end();
      return;
    }
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(file, 'binary');
    response.end();
  });
}

export { start, upload, show };
