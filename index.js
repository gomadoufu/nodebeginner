const server = require('./server.js');
const router = require('./router.js');
const requestHandlers = require('./requestHandlers.js');
const handle = new Map();
handle.set('/', requestHandlers.start);
handle.set('/start', requestHandlers.start);
handle.set('/upload', requestHandlers.upload);
server.start(router.route, handle);
